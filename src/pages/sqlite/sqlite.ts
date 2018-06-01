import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

@IonicPage()


@Component({
  selector: "page-sqlite",
  templateUrl: "sqlite.html",
})
export class SqlitePage {

  private db: SQLiteObject;

  constructor(public navCtrl: NavController, private sqlite: SQLite) {
    this.createDatabaseFile();
  }


  //création de la base de données


  private createDatabaseFile(): void{
    this.sqlite.create({
      name: 'data.db',
      location: "default"
      })
        .then((db: SQLiteObject) => {
        console.log ("Bdd créée !")
        this.db = db;
        this.createTables();
      })
        .catch(e => console.log(e));
  }

  //création de ma table de données


  private createTables(): void{
    this.db.executeSql("CREATE TABLE IF NOT EXISTS `oeuvres` ( `id` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, `firstname` INTEGER, `lastname` INTEGER, `code` NUMERIC, `url` TEXT, `check` INTEGER DEFAULT 0 CHECK(1) )", {})
    .then(() => {
      console.log("Table oeuvres created !");
      this.saveDataBase();
    })
    .catch(e => console.log(e));
  }


  //insertion de donnée dans le tableau


  private saveDataBase(): void {
    this.db.executeSql(' INSERT INTO `oeuvres`(id, firstname, lastname, code, url, check, photo) VALUES (1, "ALVAREZ", "Jean-Pierre", 9213750369, 0 ), ' +
    ' (2, "ARAI", "Poeragui", 6510403686, 0 ), ' +
    ' (3, "CHANSIN", "Jérôme", 7216899933, 0 ), ' +
    ' (4, "CHEUNG-SEN", "Jonas", 1629568455, 0 ),' +
    ' (5, "CUNY", "Heimana", 9266553664, 0 ), ' +
    ' (6, "EBB", "Nicolas", 1168085824, 0 ), ' +
    ' (7, "LEHARTEL", "Alexandre", 2791010818, 0 ), ' +
    ' (8, "LENOIR", "Tetuaoro", 4173047359, 0 ), ' +
    ' (9, "LONGINE", "Manaarii", 9782420312, 0 ), ' +
    ' (11, "MONACO", "Vaitiare", 4653519064, 0 ), ' +
    ' (12, "PAEAHI", "Ariipaea", 3658034121, 0 ), ' +
    ' (14, "PAMBRUN", "Hi""omai", 9520532017, 0 ), ' +
    ' (15, "PEREZ", "Rahiti", 1228597258, 0 ), ' +
    ' (16, "PERRY", "Matihanu", 5480211371, 0 ), ' +
    ' (17, "ROUSSEL", "Christian", 2462643924, 0 ), ' +
    ' (18, "TEHUPE", "Tinirau", 5055364030, 0 ), ' +
    ' (19, "TEMATAHOTOA", "Tinirau", 6232447902, 0 ), ' +
    ' (20, "TOOFA", "Teparii", 4235066246, 0 ), ' +
    ' (21, "MARO", "Teremu", 1234567890, 0 ), ',  {})
    .then(() => {
      console.log('oeuvre ajoutée');
    })
    .catch(err => console.log('erreur oeuvre', err));
  }
  public GetInfos() {
    console.log('getinfo');
    this.db.executeSql('select `FirstName` from `oeuvres`', {})
    .then((data)=>{
      console.log('suce' +data);
      if (data==null){
        return;
      }

      if(data.rows){
        if(data.rows.length > 0) {
          for(var i=0; i=data.rows.length; i++){

            }
          }
        }
      })
    }


}
