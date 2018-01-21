import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

import { Season } from './season';


@Component({
  selector: 'list-seasons',
  templateUrl: 'list-seasons.html'
})
export class ListSeasonsComponent {

  seasonsList: AngularFireList<any>;
  seasons: Observable<any[]>;

  constructor(
    public afDatabase: AngularFireDatabase,
    public alertCtrl: AlertController
  ) {
    this.seasonsList = this.afDatabase.list('/list-seasons');
    this.seasons = this.seasonsList.valueChanges();
  }

  ngOnInit(): void {

  }

  createSeason(): void {
    let prompt = this.alertCtrl.create({
      title: 'Song Name',
      message: "Enter a name for this new song you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'subtitle',
          placeholder: 'Subtitle'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            const newSeasonRef = this.seasonsList.push({});

            newSeasonRef.set({
              id: newSeasonRef.key,
              title: data.title,
              subtitle: data.subtitle
            });
          }
        }
      ]
    });
    prompt.present();
  }

  deleteSeason(seasonID: string) {
    this.seasonsList.remove(seasonID);
  }

  editSeason(seasonID: string) {
    let prompt = this.alertCtrl.create({
      title: 'Season Name',
      message: "Update the season",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'subtitle',
          placeholder: 'Subtitle'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.seasonsList.update(seasonID, {
              title: data.title,
              subtitle: data.subtitle,
            });
          }
        }
      ]
    });
    prompt.present();
  }

}
