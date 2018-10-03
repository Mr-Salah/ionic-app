import { ApiServiceProvider } from "../../providers/api-service/api-service";
import { Component } from "@angular/core";
import { NavController, App, ToastController } from "ionic-angular";
import { Utilisateur } from "../../models/Utilisatur.models";

@Component({
  selector: "page-add",
  templateUrl: "add.html"
})
export class AddPage {

  public utl = new Utilisateur();

  constructor(
    public navCtrl: NavController,
    private apiservice: ApiServiceProvider,
    private app: App,
    private toast: ToastController
  ) {
    }

  changeListener($event): void {
    this.utl.url = $event.target.files[0];
    console.log(this.utl.url);
  }

  /// on submit 

  btn_submit() {
    console.log(this.utl);

    this.IsValide();

    if (this.IsValide()) {
      this.apiservice.store_utl(this.utl).subscribe(
        response => {
  
          console.log(response);
  
          if (response.ok == true) {
  
            this.utl.name=this.utl.url=this.utl.lastname=this.utl.id=this.utl.biographie= this.utl.email ="";
            this.message_s_v("successfully saved !");
  
            
          }
  
        },
        error => {
          console.log(error);
        }
      );
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
      this.utl.url=="" )
    {
      this.message_s_v("One or more fields are empty");
      return false ;
    }
    return true;
  }


  //btn to disconnect
  
  btn_logout() {
    this.apiservice.logout();

    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
