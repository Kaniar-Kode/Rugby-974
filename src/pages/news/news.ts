import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Season } from './season';



@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage implements OnInit {

  season: Season = new Season();

  constructor(
    public navCtrl: NavController
  ) {

  }

  ngOnInit(): void {

  }

  showListSeasons(): void {
    this.season.listSeasons = true;
    this.season.editSeason = false;
    this.season.createSeason = false;
  }

  createSeason(): void {
    this.season.listSeasons = false;
    this.season.editSeason = false;
    this.season.createSeason = true;
  }

}
