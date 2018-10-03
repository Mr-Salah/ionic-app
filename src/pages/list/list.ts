import { UpdatePage } from '../update/update';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Component } from '@angular/core';
import { NavController, App, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class listPage {

  public list_Utls;
  public empty=true;


  constructor(public navCtrl: NavController ,
              public apiservice:ApiServiceProvider,
              private app:App,
              private alertCtr:AlertController) {}

  ionViewWillEnter(){

    this.charge_utls();
    
    
  }

  charge_utls(){


      this.apiservice.list_utl().subscribe((response) => {
          console.log(response);
          this.list_Utls = response;
          this.empty = false;
      },
        error => {
          console.log(error);
          this.empty = true;

      });

      
      

  }

  

  // Delete :Button Delete & Message confirmation 

  btn_delete(id) {
    let alert = this.alertCtr.create({
      title: 'Delete',
      message: 'Do you want to delete this user ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Delete clicked');
            this.delete_utl(id)
          }
        }
      ]
    });
    alert.present();
  }

  //Delete 

  delete_utl(id){
    console.log("delete ",id);
    this.apiservice.delete_utl(id).subscribe((response) => {
        console.log(response);
        this.charge_utls();
    },
      error => {
        console.log(error);
    });
  }


  //update

  btn_update(id){

    console.log("update ",id);

    this.navCtrl.push(UpdatePage,{'id':id});
    
  }

  //logout

  btn_logout(){
    this.apiservice.logout();

    const root = this.app.getRootNav();
    root.popToRoot();

  }

  

}
