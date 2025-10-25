import { Component, OnInit } from '@angular/core';
import { SELLS_FLOCK_INPUTS } from 'src/app/shared/config/flock-form.config';

@Component({
  selector: 'app-sells',
  templateUrl: './sells.page.html',
  styleUrls: ['./sells.page.scss'],
  standalone: false,
})
export class SellsPage implements OnInit {

  accordingData = SELLS_FLOCK_INPUTS;

  constructor() { }

  ngOnInit() {
  }

}
