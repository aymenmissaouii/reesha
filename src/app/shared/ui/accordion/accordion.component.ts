import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [ IonicModule ],
  standalone: true
})
export class AccordionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
