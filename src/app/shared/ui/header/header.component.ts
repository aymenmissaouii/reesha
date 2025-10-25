import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { AnimationController, IonicModule, MenuController } from '@ionic/angular';
import { RingNotificationsComponent } from "../ring-notifications/ring-notifications.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, RingNotificationsComponent],
  standalone: true
})
export class HeaderComponent  implements OnInit {

  @Input() title: string = '';
  @Input() right_icon: string = '';
  @Input() left_icon: string = '';
  @Input() menuId = 'main-menu';

  @ViewChild('bellBtn', { read: ElementRef }) bellBtn?: ElementRef;
  constructor(
    private menuCtrl: MenuController,
    private animCtrl: AnimationController
  ) { }

  ngOnInit() {}

  toggle() { this.menuCtrl.toggle('main-menu'); }

  ngAfterViewInit() {
    if (!this.bellBtn) {
            console.error('Bell button element not found in the template.');
            return;
    }
    const icon = this.bellBtn.nativeElement.querySelector('ion-icon');
    const ring = this.animCtrl
    .create()
    .addElement(icon)
    .duration(1600)
    .iterations(Infinity)
    .keyframes([
      { offset: 0,   transform: 'rotate(0deg)'   },
      { offset: .10, transform: 'rotate(15deg)'  },
      { offset: .20, transform: 'rotate(-13deg)' },
      { offset: .30, transform: 'rotate(10deg)'  },
      { offset: .40, transform: 'rotate(-8deg)'  },
      { offset: .50, transform: 'rotate(6deg)'   },
      { offset: .60, transform: 'rotate(-4deg)'  },
      { offset: .70, transform: 'rotate(2deg)'   },
      { offset: 1,   transform: 'rotate(0deg)'   },
    ]);
    ring.play();
  // if (this.unreadCount > 0) ring.play(); else ring.stop();
}
}
