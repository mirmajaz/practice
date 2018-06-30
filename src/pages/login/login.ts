import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import {HomePage} from'../home/home';
import {UserDetailsPage} from '../userDetails/userDetails';
import{RedditData}from'../../providers/reddit-data/reddit-data';
import { Http } from '@angular/http';

@Component({
   templateUrl: 'login.html'
})
export class LoginPage {
  login:any;
loginList:any;
users : any = [];
i : number ; 
constructor(public menu :MenuController,public navCtrl: NavController, public reddit :RedditData)   {
    // console.log('this',this.reddit.getLocalData());
  
    console.log("in login",this.users=this.reddit.getLocalData());
  
    this.users = [
      {"username":"usr1"  ,      "password":"a12312"},
      {"username":"usr2"  ,      "password":"a123"},
      {"username":"usr3"  ,      "password":"a123"},
      {"username":"usr4"  ,      "password":"a123"},
      {"username":"usr5"  ,      "password":"a123"},
      {"username":"usr6"  ,      "password":"a123"}
      ];
           console.log('users',this.users);                     
                                  
  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
     // Don't forget to return the swipe to normal, otherwise 
     // the rest of the pages won't be able to swipe to open menu
     // this.menu.swipeEnable(true);
    // If you have more than one side menu, use the id like below
     // this.menu.swipeEnable(true, 'menu1');
   }

  loginSubmit(value){
  //  console.log(this.users[1].password);
     for(let i=0 ; i<6; i++)
     {
        if (this.users[i].username === value.username && this.users[i].password === value.password)
         {
          this.navCtrl.setRoot(UserDetailsPage);
         }
         else{

          console.log("wrong password");
         }
     }    
    localStorage.setItem('username', value.username);
    //retrieve the stored data by the key


}}