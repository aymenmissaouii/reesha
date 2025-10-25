import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellsPageRoutingModule } from './sells-routing.module';

import { SellsPage } from './sells.page';
import { HeaderComponent } from 'src/app/shared/ui/header/header.component';
import { AccordionComponent } from 'src/app/shared/ui/accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellsPageRoutingModule,
    HeaderComponent,
    AccordionComponent
  ],
  declarations: [SellsPage]
})
export class SellsPageModule {}
