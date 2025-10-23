import { Component, OnInit } from '@angular/core';
import { COST_FLOCK_INPUTS } from 'src/app/shared/config/flock-form.config';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.page.html',
  styleUrls: ['./cost.page.scss'],
  standalone: false
})
export class CostPage implements OnInit {

  accordingData = COST_FLOCK_INPUTS;

  constructor() { }

  ngOnInit() {
    console.log('accordingData in cost page', this.accordingData);
  }

}
