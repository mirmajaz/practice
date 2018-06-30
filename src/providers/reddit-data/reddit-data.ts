import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class RedditData {
 
  constructor(public http: Http) {
    console.log('Hello RedditDataProvider Provider');
  }
  getLocalData(){
    this.http.get('assets/model/data.json').map(res => res.json()).subscribe(data => {
        console.log('yahan',data);
    });
  }
 
}