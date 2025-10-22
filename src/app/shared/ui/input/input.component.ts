import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [ IonicModule ],
  standalone: true,
})
export class InputComponent  implements OnInit {

  @Input() label: string = 'أدخل العدد الجملي للكتاكيت';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'الكمية';
  @Input() value: string = '';
  @Input() icon: string = 'information-circle-outline';
  @Output() valueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  onInput(ev: CustomEvent)   { this.valueChange.emit((ev.target as HTMLIonInputElement).value); }
  onChange(ev: CustomEvent)  { this.valueChange.emit((ev.target as HTMLIonInputElement).value); }

}
