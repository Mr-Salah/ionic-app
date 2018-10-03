
import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  url = 'http://127.0.0.1:8000/api/utl';

  constructor(public http: Http,private storae :Storage) {
    console.log('Hello ApiServiceProvider Provider');
  }

  // crud


  list_utl(){

    //Call API 
    return this.http.get(this.url).map((data:Response)=>{
      return data.json(); 
    });
    
  }

  store_utl(utl){

    let formData = new FormData();

    

    formData.append('img', utl.url);
    formData.append('name', utl.name);
    formData.append('lastname', utl.lastname);
    formData.append('email', utl.email);
    formData.append('biographie', utl.biographie);

    
    return this.http.post(this.url,formData).map((data:Response)=>{
      return data; 
    });

  }

  delete_utl(id){

    return this.http.delete(this.url+'/'+id).map((data:Response)=>{
      return data; 
    });
    
  }

  get_utl(id){

    return this.http.get(this.url+'/'+id+'/edit').map((data:Response)=>{
      return data.json(); 
    });
      
  }

  update_utl(utl){

    
    let formData = new FormData();

    formData.append('url', utl.url);
    formData.append('id', utl.id);
    formData.append('name', utl.name);
    formData.append('lastname', utl.lastname);
    formData.append('email', utl.email);
    formData.append('biographie', utl.biographie);
    formData.append('_method', 'PATCH');

    return this.http.post(this.url+'/'+utl.id,formData);
    
  }


  // loin 

  login(email,pass){

    
    let formData = new FormData();

    formData.append('email', email);
    formData.append('password', pass);

    return this.http.post(this.url+'/log',formData).map((data:Response)=>{
      return data.json();
    });
      

  }

  // logout

  logout(){
    this.storae.remove('login');
  }

  
}
