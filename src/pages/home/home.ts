import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goNews() {
    this.navCtrl.push('NewsPage');
  }

  goResults() {
    this.navCtrl.push('ResultsPage');
  }

  goCalendar() {
    this.navCtrl.push('CalendarPage');
  }

}
