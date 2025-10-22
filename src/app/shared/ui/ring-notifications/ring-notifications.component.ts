import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ring-notifications',
  templateUrl: './ring-notifications.component.html',
  styleUrls: ['./ring-notifications.component.scss'],
  imports: [ IonicModule ],
  standalone: true
})
export class RingNotificationsComponent  implements OnInit {

  @ViewChild('bellBtn', { read: ElementRef }) bellBtn!: ElementRef;
  constructor(
    private animCtrl: AnimationController
  ) { }

  ngOnInit() {}

    ngAfterViewInit() {
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
