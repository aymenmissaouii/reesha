import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonModal } from '@ionic/angular/standalone';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [ IonicModule, ButtonComponent, InputComponent ],
  standalone: true
})
export class ModalComponent  implements OnInit {

  public isOpen: boolean = false;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(IonModal) modal!: IonModal;

  inputs = [
    {
      label: 'أدخل إسم الدورة',
      type: 'text',
      placeholder: 'مثال: حضيرة سالم',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'تاريخ الإستلام',
      type: 'date',
      placeholder: 'التاريخ ',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'أدخل العدد الجملي للكتاكيت',
      type: 'number',
      placeholder: 'الكمية',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'أدخل سعر الكتكوت الواحد',
      type: 'number',
      placeholder: 'سعر الكتكوت',
      icon: 'information-circle-outline',
      value: ''
    },

  ];

  constructor() { }

  ngOnInit() {}

onFieldChange(index: number, value: any) {
  console.log(`Input at index ${index} changed to:`, value);
  console.log(this.inputs);
  const payload = this.inputs.map(x => ({ key: x.label, value: x.value }));
  console.log('payload', payload);
}

isFilled(v: any): boolean {
  if (v === null || v === undefined) return false;
  if (typeof v === 'string') return v.trim().length > 0;
  if (typeof v === 'number') return !Number.isNaN(v);
  return true; // dates/objects/etc.
}

get allFilled(): boolean {
  return this.inputs.every(i => this.isFilled(i.value));
}

saveData(){
  this.save.emit(this.inputs);
  this.modal?.dismiss();
  // this.isOpen = false;
}

}
