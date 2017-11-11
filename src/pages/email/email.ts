import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }

  async logout() {
    try {
      const result = this.afAuth.auth.signOut();

      if (result) {
        this.navCtrl.popToRoot();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
