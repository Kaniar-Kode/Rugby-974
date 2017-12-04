import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../../models/user.interface';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  user: AngularFireList<User>;

  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase) {
    afDatabase.list('login').valueChanges().subscribe(console.log);
  }

}
