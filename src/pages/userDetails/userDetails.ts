import { Component} from '@angular/core';
import { NavController,App,Nav,Platform,ToastController,MenuController,AlertController,ModalController } from 'ionic-angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
// import {HomePage} from '../home/home';
// import {LoginPage} from '../login/login';
// import {ListPage} from '../list/list' 
@Component({
  templateUrl: 'userDetails.html'
})
export class UserDetailsPage {

  constructor(public nav :Nav,public platform :Platform, public app: App,public navCtrl: NavController, public alertCtrl : AlertController,private menu : MenuController, public toastCtrl: ToastController)   {
    this.menu = menu;
    this.menu.enable(true, 'myMenu');
    console.log(localStorage.getItem('username'));
          var lastTimeBackPress=0;
      var timePeriodToExit=2000;

    
    //  platform.registerBackButtonAction(() => {
    //    let nav = app._appRoot._getActivePortal() || app.getActiveNav();
    //    let activeView = nav.getActive();
    //   if (menu.isOpen) {
    //     menu.close();
        
    //   }

    //   else if (activeView != null) {
    //     if (nav.canGoBack()) {
    //       nav.pop();
    //     } else if(activeView.isOverlay) {
    //       activeView.dismiss();
    //     } else {
    //       this.presentConfirm();
    //       //backgroundMode.moveToBackground();
    //     // this.platform.exitApp();
        
    //   }
    //   }
    // });
    
  //   platform.ready().then(() => { 
  //     //back button handle
  //     //Registration of push in Android and Windows Phone
  //     var lastTimeBackPress=0;
  //     var timePeriodToExit=2000;

  platform.registerBackButtonAction(() => {
     // get current active page
      let view = this.nav.getActive();
      if(this.menu.isOpen){
        this.menu.close;
  }
    if(view.component.name=="TabsPage"){
                    //Double check to exit app                  
                    if(new Date().getTime() - lastTimeBackPress < timePeriodToExit){
                         this.platform.exitApp(); //Exit from app
                    }else{
                         let toast = this.toastCtrl.create({
                            message: 'Press back again to exit App?',
                            duration: 3000,
                            position: 'bottom'
                          });
                            toast.present();     
                            lastTimeBackPress=new Date().getTime();
                    }
    }else{
         // go to previous page
              this.nav.pop({});
    }
  });

// });

 
}

  //  this.platform.registerBackButtonAction(() => {
  // let alert = this.alertCtrl.create({
  //   title: 'Confirm purchase',
  //   message: 'Do you want to Exit?',
  //   buttons: [
  //     {
  //       text: 'Cancel',
  //       role: 'cancel',
  //       handler: () => {
  //       alert.dismiss();
  //       }
  //     },
  //     {
  //       text: 'Exit',
  //       handler: () => {
  //     this.platform.exitApp();
  //       }
  //     }
  //   ]
  // });
  // alert.present();

  //  )};
  
  }

