import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(private navCtrl: NavController,private storage: Storage) {
  }

  ionViewCanEnter() {
    console.log('ionViewDidLoad WelcomePage');

    this.storage.get('login').then(resp =>{
      
      if(resp != null) this.navCtrl.push(TabsPage); 


    })


  }

  btn_loin(){
    this.navCtrl.push(LoginPage);
  }

}
