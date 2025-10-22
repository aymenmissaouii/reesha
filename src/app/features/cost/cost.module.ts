import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostPageRoutingModule } from './cost-routing.module';

import { CostPage } from './cost.page';
import { AccordionComponent } from 'src/app/shared/ui/accordion/accordion.component';
import { HeaderComponent } from 'src/app/shared/ui/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostPageRoutingModule,
    AccordionComponent,
    HeaderComponent
  ],
  declarations: [CostPage]
})
export class CostPageModule {}
