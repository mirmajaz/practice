import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import {Intro} from '../intro/intro'
import {LoginPage} from '../login/login'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menu :MenuController) {
localStorage.clear();
console.log(localStorage.getItem("username"))
  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise 
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
   }

goToIntro(){

this.navCtrl.push(Intro)

}
goToLogin(){

  this.navCtrl.push(LoginPage)
}
}
