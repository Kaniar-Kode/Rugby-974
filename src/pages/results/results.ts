import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  notes: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) { }

    addNote(): void {
      let prompt = this.alertCtrl.create({
        title: "Add Note",
        inputs: [{
          name: "title"
        }],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Add",
            handler: data => {
              this.notes.push(data);
            }
          }
        ]
      });
      prompt.present();
    }

    editNote(note): void {
      let prompt = this.alertCtrl.create({
        title: "Edit Note",
        inputs: [{
          name: "title"
        }],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Save",
            handler: data => {
              let index = this.notes.indexOf(note);

              if (index > -1) {
                this.notes[index] = data;
              }
            }
          }
        ]
      });
      prompt.present();
    }

    deleteNote(note): void {
      let index = this.notes.indexOf(note);

      if (index > -1) {
        this.notes.splice(index, 1);
      }
    }

}
