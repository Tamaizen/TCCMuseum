import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanPage } from '../scan/scan';
import { SqlitePage } from "../sqlite/sqlite";

import { DatabaseProvider } from "../database/database";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';



@NgModule({
  declarations: [
    ScanPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanPage),
  ],
  providers: [
    BarcodeScanner
  ]
})
export class ScanPageModule {}
