// @ionic base
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Http } from "@angular/http";

// pages
import { InfoPage } from '../pages/info/info';
import { HomePage } from '../pages/home/home';
import { ScanPageModule } from '../pages/scan/scan.module';
import { TabsPage } from '../pages/tabs/tabs';
import { DatabaseProvider } from "../pages/database/database";
import { SqlitePage } from "../pages/sqlite/sqlite";

// plugin @ionic-native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// ionic-native/native-storage en trop pour le moment
import { NativeStorage } from '@ionic-native/native-storage';
import { SQLite } from '@ionic-native/sqlite';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScanPage } from '../pages/scan/scan';

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    HomePage,
    TabsPage,
    ScanPage,
    SqlitePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    HomePage,
    TabsPage,
    SqlitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    InAppBrowser,
    NativeStorage,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
