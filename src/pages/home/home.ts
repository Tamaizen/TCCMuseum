import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

import { SqlitePage } from "../sqlite/sqlite";
import { DatabaseProvider } from "../database/database";

const DATABASE_FILE_NAME: string = 'tccmuseum.db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  splash = true;
  tabBarElement: any;


  private worksInfo = [];
  private db: SQLiteObject;
  public loadingStatus: string;
  public myName: string;

  constructor(platform: Platform, public navCtrl: NavController, private sqlite: SQLite, private dbService:DatabaseProvider) {

    platform.ready()
      .then(() => {
        this.dbService.startAppDatabase();
        this.loadingStatus = this.dbService.loadingStatus;
    })
  }

  // Function linked to start button, sends to the Tabs/List pages and sets Root page to Tabs
  private goToTabs() {
    console.log("Root page set to Tabs");
    this.navCtrl.setRoot(SqlitePage, this.db)

  }



}

