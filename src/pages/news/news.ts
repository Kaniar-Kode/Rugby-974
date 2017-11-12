import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  songs: AngularFireList<any>;

  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
