import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/shared/ui/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {

  helps = [
    {
      link:"assets/helps_icons/chicken.png",
      label:"جدول التحصينات"
    },
      {
      link:"assets/helps_icons/lampe.png",
      label:"ساعات إضاءة"
    },
      {
      link:"assets/helps_icons/temperature.png",
      label:"درجة الحرارة"
    },
      {
      link:"assets/helps_icons/virus.png",
      label:"الأمراض"
    },
      {
      link:"assets/helps_icons/news.png",
      label:"مقالات"
    },
      {
      link:"assets/helps_icons/ventilateur.png",
      label:"تشغيل الشفاطات"
    },
  ];

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openAccordingFn(){
    this.router.navigate(['/cost']);
  }

  addMore(event:any){
    console.log(event);
  }
}
