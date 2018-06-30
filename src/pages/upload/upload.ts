import {Component} from '@angular/core';
import { NavController,Nav,ActionSheetController, ToastController, Platform, LoadingController, Loading,AlertController } from 'ionic-angular';
import {File} from '@ionic-native/file';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker';
import  {SwipePage} from '../swipe/swipe'

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'upload.html'
})

export class UploadPage {
  path:string;
  storageDirectory: string = '';
  public base64Image :string;
  constructor(public crop:Crop,public picker:ImagePicker,public camera:Camera,public nav:Nav , public navCtrl: NavController,  private file: File, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController,public alertCtrl :AlertController) { 
  this.path ="assets/imgs/image1.jpg"; 
  }
  public presentActionSheet() {
   
   let actionSheet = this.actionSheetCtrl.create({
       
       title: 'Select Image Source',
       buttons: [
         {
           text: 'Load from Library',
           handler: () => {
             this.takePicture1();
            
           }
         },
         {
           text: 'Use Camera',
           handler: () => {
              this.takePicture(this.camera.PictureSourceType.CAMERA);
             
           }
         },
         {
           text: 'Cancel',
           role: 'cancel'
         
       }
       
       ]
     });
     actionSheet.present();
   }

   public takePicture(sourceType){


    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((url) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
     this.path = url;
     let options ={
      quality :100,
      targetHeight:100,
      targetWidth:100
    
    };
    this.crop.crop(this.path,options).then(newIamgeUrl =>{
    
      this.path = newIamgeUrl;
    });
     
     }, (err) => {
      // Handle error
     });
      
  }
   takePicture1(){
    let option = {
      title : "select picture",
      message : "select 1 picture",
      maximumImagesCount :1,
      outType:0
};
this.picker.getPictures(option).then((results) => {
  for (var i = 0; i < results.length; i++) {
    //  console.log('Image URI: ' + results[i]);
    this.path= results[i];

    let options ={
      quality :100,
      targetHeight:100,
      targetWidth:100
    
    };
    this.crop.crop(this.path,options).then(newIamgeUrl =>{
    
      this.path = newIamgeUrl;
    });
  }
}, (err) => { });

   }
  
  downloadImage(image) {

    // this.platform.ready().then(() => {

    //   // const fileTransfer: TransferObject = this.transfer.create();

    //   const imageLocation = `${cordova.file.applicationDirectory}www/assets/img/${image}`;

    //   // fileTransfer.download(imageLocation, this.storageDirectory + image).then((entry) => {

    //     const alertSuccess = this.alertCtrl.create({
    //       title: `Download Succeeded!`,
    //       // subTitle: `${image} was successfully downloaded to: ${entry.toURL()}`,
    //       buttons: ['Ok']
    //     });

    //     alertSuccess.present();

    //   }, (error) => {

    //     const alertFailure = this.alertCtrl.create({
    //       title: `Download Failed!`,
    //       subTitle: `${image} was not successfully downloaded. Error code: ${error.code}`,
    //       buttons: ['Ok']
    //     });

    //     alertFailure.present();

    //   });

    // });

  }

  retrieveImage(image) {

    // this.file.checkFile(this.storageDirectory, image)
    //   .then(() => {

    //     const alertSuccess = this.alertCtrl.create({
    //       title: `File retrieval Succeeded!`,
    //       subTitle: `${image} was successfully retrieved from: ${this.storageDirectory}`,
    //       buttons: ['Ok']
    //     });

    //     return alertSuccess.present();

    //   })
    //   .catch((err) => {

    //     const alertFailure = this.alertCtrl.create({
    //       title: `File retrieval Failed!`,
    //       subTitle: `${image} was not successfully retrieved. Error Code: ${err.code}`,
    //       buttons: ['Ok']
    //     });

    //     return alertFailure.present();

    //   });
  }
  nextPage(){

    this.navCtrl.push(SwipePage);
  }

}