import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user.interface';
import { AngularFireAuth } from 'angularfire2/auth';

import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {

  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

      if (result) {
        this.navCtrl.push('EmailPage');
      }
    } catch (error) {
      console.log(error);
    }
  }

  loginFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(() => {
      firebase.auth().getRedirectResult().then(result => {
        alert(JSON.stringify(result));
      }).catch(function (error) {
        alert(JSON.stringify(error));
      });
    });
  }

}
