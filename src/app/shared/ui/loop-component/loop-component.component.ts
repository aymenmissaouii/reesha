import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loop-component',
  templateUrl: './loop-component.component.html',
  styleUrls: ['./loop-component.component.scss'],
  imports: [IonicModule, ButtonComponent, RouterLink]
})
export class LoopComponentComponent  implements OnInit {

  @Input() data: {img:string, title: string, date: string, number: number, updown: string, updownprice:number} | undefined | null;
  @Output() details: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
