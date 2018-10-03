import { WelcomePage } from './../pages/welcome/welcome';
import { LoginPage } from './../pages/login/login';
import { UpdatePage } from './../pages/update/update';
import { AddPage } from './../pages/add/add';
import {  HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { listPage } from '../pages/list/list';

import { IonicStorageModule } from '@ionic/storage';
import { HeaderColor } from '@ionic-native/header-color';

@NgModule({
  declarations: [
    MyApp,
    AddPage,
    UpdatePage,
    listPage,
    TabsPage,
    LoginPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPage,
    UpdatePage,
    listPage,
    TabsPage,
    LoginPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    HeaderColor
  ]
})
export class AppModule {}
