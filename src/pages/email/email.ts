import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


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
