import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DatabaseService, User } from 'src/app/core/services/data-base';

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
  data:any = null;
  users = this.databaseService.getUsers();
  newUserName = 'Aymen';

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private databaseService: DatabaseService
  ) {
    this.createUser();
  }

  async createUser(){
    await this.databaseService.addUser(this.newUserName);
    this.newUserName = '';
  }

  updateUser(user: User){
    const active = user.active ? 1 : 0;
    this.databaseService.updateUserById(user.id, active);
  }

  deleteUser(user: User){
    this.databaseService.deleteUserById(user.id);
  }

  ngOnInit() {
    console.log(this.users);
  }

  openAccordingFn(){
    this.router.navigate(['/cost']);
  }

  addMore(event:any){
    console.log(event);
  }
}
