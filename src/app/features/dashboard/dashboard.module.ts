import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { KpiCardComponent } from 'src/app/shared/ui/kpi-card/kpi-card.component';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';
import { EmptyStateComponent } from 'src/app/shared/ui/empty-state/empty-state.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    KpiCardComponent,
    ButtonComponent,
    EmptyStateComponent
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
