import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  result: BarcodeScanResult;
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private bcs: BarcodeScanner, private toastCtrl: ToastController) {
  }


  ionViewWillEnter(){
    this.scanBarcode();
  }


  scanBarcode() {
    const options: BarcodeScannerOptions ={
      prompt: 'Pointez votre caméra vers un Code Barre',
      torchOn: false
    };

    this.bcs.scan(options)
      .then(res =>{
        this.result = res;
      })
      .catch(err =>{
        this.toastCtrl.create({
          message: err.message
        }).present();
      })

  }


}
