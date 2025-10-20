import { Component, OnInit, Input } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class KpiCardComponent  implements OnInit {

  @Input() link!:string;
  @Input() label!:string;
  constructor() { }

  ngOnInit() {}

}
