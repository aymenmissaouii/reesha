import { Component, OnInit, Input } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
  imports: [ IonicModule ],
  standalone: true
})
export class MenuSidebarComponent  implements OnInit {

   @Input() contentId = 'main-content';
  /** Optional explicit menu id (used by IonMenuButton in the header) */
  @Input() menuId = 'main-menu';
user = { name: 'Abdallah Ahmed', role: 'المالك' };
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {}
  close() { this.menuCtrl.close(this.menuId); }

}
