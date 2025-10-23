import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonAccordionGroup, IonicModule } from '@ionic/angular';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [ IonicModule, InputComponent, ButtonComponent ],
  standalone: true
})
export class AccordionComponent  implements OnInit {
  @ViewChild('accordionGroup', { static: true }) accordionGroup!: IonAccordionGroup;
  @Input() accordingData: any;
  value: string = 'first';
  constructor() { }

  ngOnInit() {}

  toggleAccordion = (index: number) => {
    const nativeEl = this.accordionGroup;
    const valueToOpen = this.accordingData[index]?.value;

    if (valueToOpen) {
        nativeEl.value = valueToOpen;
    } else {
        nativeEl.value = undefined;
    }
  };

  handleChange(event: any, item: any) {
      const selectedValue = item.find((val: any) => val.value === event.detail.value);
      if (!selectedValue) return;

      let newItem: any = null;
      let minus = 1;
      selectedValue.disabled = true;

      if (event.detail.value !== 'other' && event.detail.value !== 'desiel') {
        newItem = {
            title: selectedValue.label,
            value: event.detail.value,
            inputs: [
                {
                    label: 'أدخل مصاريف' + ' ' + selectedValue.label,
                    type: 'number',
                    placeholder: 'المبلغ',
                    icon: 'information-circle-outline',
                    value: ''
                }
            ],
            total_price: 0,
            trash: true
        };

      } else if (event.detail.value === 'desiel') {
        newItem = {
            title: selectedValue.label,
            value: event.detail.value,
            inputs: [
                {
                    label: 'أدخل كمية المازوط باللتر',
                    type: 'number',
                    placeholder: 'الكمية باللتر',
                    icon: 'information-circle-outline',
                    value: ''
                },
                {
                    label: 'أدخل سعر اللتر',
                    type: 'number',
                    placeholder: 'السعر',
                    icon: 'information-circle-outline',
                    value: ''
                },
                {
                    label: 'أدخل تاريخ الإستلام',
                    type: 'date',
                    placeholder: 'التاريخ',
                    icon: 'information-circle-outline',
                    value: ''
                }
            ],
            total_price: 0,
             trash: true
        };
      }else{
        newItem = {
            title: 'أخرى',
            value: event.detail.value,
            inputs: [
                {
                    label: 'أدخل إسم المصاريف أخرى',
                    type: 'text',
                    placeholder: 'الإسم',
                    icon: 'information-circle-outline',
                    value: ''
                },
                {
                    label: 'أدخل السعر',
                    type: 'number',
                    placeholder: 'السعر',
                    icon: 'information-circle-outline',
                    value: ''
                }
            ],
            total_price: 0,
            trash: true
        };
        minus = 0;
      }

      const insertionIndex = this.accordingData.length - minus;
      this.accordingData.splice(insertionIndex, 0, newItem);

      setTimeout(() => {
          this.toggleAccordion(insertionIndex);
      }, 0);
  }

  deleteItem(event: any) {
    let value = this.accordingData[event].value;

    const length = this.accordingData.length -1;

    const deletedItem = this.accordingData[length].inputs[0].value.find((item: any) => item.value === value);

    deletedItem.disabled = false;

    this.accordingData.splice(event, 1);

    setTimeout(() => {
        this.toggleAccordion(event);
    }, 0);
  }

}
