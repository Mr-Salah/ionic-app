import { TabsPage } from './../tabs/tabs';
import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string;
  password:string; 
 


  constructor(private apiservice :ApiServiceProvider,
    private nanvCtrl: NavController,
    private storage: Storage ,
    private alertCtr :AlertController) {}

 

  btn_login(){
    
    console.log('eamil',this.email);
    console.log('password',this.password);

    this.apiservice.login(this.email,this.password).subscribe((response) => {
      

      if(response != null){
        console.log(response);

        this.storage.set('login','is_login');

        this.nanvCtrl.push(TabsPage);
        
      }
      else{

        this.alertCtr.create({
          title: 'Login',
          subTitle: 'Your email or password not correct !!',
          buttons: ['Dismiss']
        }).present();
        
        
      }


    },
      error => {
        console.log(error);
    });
    
  }

}
