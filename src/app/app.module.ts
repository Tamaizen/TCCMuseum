import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { infoPage } from '../pages/info/info';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ScanPageModule } from '../pages/scan/scan.module';
import { SqlitePage } from "../pages/sqlite/sqlite";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeStorage } from '@ionic-native/native-storage';
import { SQLite } from '@ionic-native/sqlite';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    infoPage,
    HomePage,
    TabsPage,
    SqlitePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ScanPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    infoPage,
    HomePage,
    TabsPage,
    SqlitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    InAppBrowser,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
