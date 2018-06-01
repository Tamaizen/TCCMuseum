import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
  }


}
