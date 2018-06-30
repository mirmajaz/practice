import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {UploadPage} from '../pages/upload/upload';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { UserDetailsPage } from '../pages/userDetails/userDetails';
import { LoginPage } from '../pages/login/login';

import{SwipePage} from '../pages/swipe/swipe'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
 
   rootPage: any = HomePage;


  pages: Array<{title: string, component: any}>;

  constructor(public toastCtrl:ToastController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: UserDetailsPage },

      {title: "logout",component: HomePage},
      {title: "next",component:UploadPage}

    ];
if (localStorage.getItem('username')==null) {
this.rootPage = HomePage;
}
else{
  this.rootPage=UserDetailsPage;
}
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.registerBackButtonAction(()=>this.myHandlerFunction());
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  myHandlerFunction(){
    let toast = this.toastCtrl.create({
     message: "Press Again to Confirm Exit",
     duration: 3000
   });
   toast.present(); 
    }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
