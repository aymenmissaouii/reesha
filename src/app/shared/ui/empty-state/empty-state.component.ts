import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  imports:[IonicModule],
  standalone: true,
})
export class EmptyStateComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
