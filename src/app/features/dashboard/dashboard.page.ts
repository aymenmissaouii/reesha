import { Component, OnInit } from '@angular/core';

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
  ]

  constructor() { }

  ngOnInit() {
  }

  addMore(event:any){
    console.log(event);
  }
}
