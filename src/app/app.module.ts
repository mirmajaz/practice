import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Intro } from '../pages/intro/intro';
import {UploadPage} from '../pages/upload/upload';
import  {LoginPage} from'../pages/login/login'
import  {UserDetailsPage} from '../pages/userDetails/userDetails';

import {SwipePage} from '../pages/swipe/swipe';
import { HttpModule } from '@angular/http';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RedditData } from '../providers/reddit-data/reddit-data';
import {File} from '@ionic-native/file';
import { Crop } from '@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SwipePage,
    UploadPage,
     Intro,
    LoginPage,
    UserDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Intro,
    UploadPage,
    SwipePage,
    LoginPage,
    UserDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditData,
    Crop,
    NativePageTransitions,
    ImagePicker
  ]
})
export class AppModule {}

