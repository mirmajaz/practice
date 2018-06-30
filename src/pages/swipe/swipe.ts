import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the SwipePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-swipe',
  templateUrl: 'swipe.html'
})
export class SwipePage {

  tab1Root = 'Tab1Page'
  tab2Root = 'Tab2Page'
  tab3Root = 'Tab3Page'


  constructor(private nativePageTransitions: NativePageTransitions) {}
  loaded:   boolean = false;
tabIndex: number  = 0;
private getAnimationDirection(index):string {
  var currentIndex = this.tabIndex;

  this.tabIndex = index;

  switch (true){
    case (currentIndex < index):
      return('left');
    case (currentIndex > index):
      return ('right');
  }
}
public transition(e):void {
  let options: NativeTransitionOptions = {
   direction:this.getAnimationDirection(e.index),
   duration: 250,
   slowdownfactor: -1,
   slidePixels: 0,
   iosdelay: 20,
   androiddelay: 0,
   fixedPixelsTop: 0,
   fixedPixelsBottom: 48
  };

  if (!this.loaded) {
    this.loaded = true;
    return;
  }

  this.nativePageTransitions.slide(options);
}


}
