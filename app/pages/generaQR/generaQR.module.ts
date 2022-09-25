import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneraQRPageRoutingModule } from './generaQR-routing.module';

import { GeneraQRPage } from './generaQR.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneraQRPageRoutingModule
  ],
  declarations: [GeneraQRPage]
})
export class GeneraQRPageModule {}
