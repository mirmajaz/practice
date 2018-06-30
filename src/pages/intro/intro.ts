import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
// import {LoginPage} from '../login/login';
// import {ListPage} from '../list/list' ;
 
// @IonicPage()
@Component({
templateUrl: 'intro.html'
})
export class Intro {
 
  constructor(public navCtrl: NavController) {
 
  }
 
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
 }