import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports:[IonicModule],
  standalone: true,
})
export class ButtonComponent  implements OnInit {

  @Input() icon:string | undefined;
  @Input() text:string |undefined;
  @Input() slot: 'start' | 'end' | 'icon-only' = 'end';
  @Input() disabled: boolean = false;
  @Output() senData: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}
