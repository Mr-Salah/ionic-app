import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Utilisateur } from '../../models/Utilisatur.models';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})
export class UpdatePage {

  
  public utl = new Utilisateur();

  constructor(public navCtrl: NavController ,
              private apiservice : ApiServiceProvider ,
              private navParams: NavParams,
              private toast: ToastController) {
                

  }

  ionViewWillEnter(){
    this.charge_utl();
  }

  charge_utl(){

      this.utl.id = this.navParams.get('id'); 

      this.apiservice.get_utl(this.utl.id).subscribe((response) => {
        console.log(response);
        this.utl = response;
    },
      error => {
        console.log(error);
    });

  }

  changeListener($event){
    this.utl.url = $event.target.files[0] ;
    console.log(this.utl.url);
  }
  
  btn_Update(){

      console.log(this.utl);

      if (this.IsValide()) {
          this.apiservice.update_utl(this.utl).subscribe((response) => {
          
          console.log(response);

          if (response.ok == true) {

            this.message_s_v("update successfully !");

            
          }

        },
          error => {
            console.log(error);
        });
      }
    
      
  }


// Message 

  message_s_v(msg){


    this.toast.create({
      message: msg,
      duration:3000,
      showCloseButton:true,
      position:'top'

    }).present();
  }


  // fields validation vlaue true & false

  IsValide(){

    if(this.utl.name=="" ||
      this.utl.lastname=="" ||
      this.utl.email =="" ||
      this.utl.biographie=="" )
    {
      this.message_s_v("One or more fields are empty");
      return false ;
    }
    return true;
  }



}
