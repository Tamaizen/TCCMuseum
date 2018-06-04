import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';

@Injectable()

export class DatabaseProvider {

  public db: SQLiteObject;
    public loadingStatus: string;
    public testString: string;

    options: any = {
        name: 'tccmuseum.db',
        location: 'default',
        createFromLocation: 1
    }

    constructor(platform: Platform, public sqlite: SQLite) {

    }
    // Creating or opening the database
    public startAppDatabase(): void {
      this.loadingStatus = 'Chargement des données en cours....patientez svp !' // Wait message while db initializes
      this.sqlite.create(this.options)
          .then((db: SQLiteObject) => {
              console.log(`DB created, named tccmuseum.db`)
              this.db = db;
              this.createTable(); // Creates table only if non-existent
          })
          .catch(e => console.log(e));
      this.loadingStatus = "Touchez ici pour démarrer" // db is initialized and ready, user can start using the app

  }

  // Function for creating table "works", only if not already created
  public createTable(): void {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS `oeuvres` ( `idoeuvres` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `firstname` TEXT NOT NULL, `lastname` TEXT NOT NULL, `code` INTEGER NOT NULL UNIQUE, `checkpoint` INTEGER DEFAULT 0 CHECK(1) )', {})
          .then(() => {
              console.log('table créée avec succès !!')
              this.insertTableValues();
          })
          .catch(e => console.log(e));
  }


  // Insert table values
  public insertTableValues(): void {
      this.db.executeSql("INSERT INTO `oeuvres` (idoeuvres,firstname,lastname,code,checkpoint) VALUES (1,'ALVAREZ','Jean-Pierre',9213750369,NULL)," +
      "(2,'ARAI','Poeragui',6510403686,NULL)," +
      "(3,'CHANSIN','Jérôme',7216899933,NULL)," +
      "(4,'CHEUNG-SEN','Jonas',1629568455,NULL)," +
      "(5,'CUNY','Heimana',9266553664,NULL)," +
      "(6,'EBB','Nicolas',1168085824,NULL)," +
      "(7,'LEHARTEL','Alexandre',2791010818,NULL)," +
      "(8,'LENOIR','Tetuaoro',4173047359,NULL)," +
      "(9,'LONGINE','Manaarii',9782420312,NULL)," +
      "(10,'LY','Joane',6872232276,NULL)," +
      "(11,'MONACO','Vaitiare',4653519064,NULL)," +
      "(12,'PAEAHI','Ariipaea',3658034121,NULL)," +
      "(13,'PAMBRUN','Aito',5175547403,NULL)," +
      "(14,'PAMBRUN','Hi''omai',9520532017,NULL)," +
      "(15,'PEREZ','Rahiti',1228597258,NULL)," +
      "(16,'PERRY','Matihanu',5480211371,NULL)," +
      "(17,'ROUSSEL','Christian',2462643924,NULL)," +
      "(18,'TEHUPE','Tinirau',5055364030,NULL)," +
      "(19,'TEMATAHOTOA','Tinirau',6232447902,NULL)," +
      "(20,'TOOFA','Teparii',4235066246,NULL)," +
      "(21,'MARO','Teremu',1234567890,NULL);", {} )
      .then(() => console.log('Insert Sucess'))
      .catch(e => console.log(e, 'Insert Failed'));
  }
}
