import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  messagesList: AngularFireList<any>;
  messages: Observable<any[]>;

  constructor(
    public afDatabase: AngularFireDatabase,
    public alertCtrl: AlertController
  ) {
    this.messagesList = this.afDatabase.list('/messages');
    this.messages = this.messagesList.valueChanges();
  }

  createMessage(): void {
    let prompt = this.alertCtrl.create({
      title: 'Message Name',
      message: "Enter your message",
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
            const newMessageRef = this.messagesList.push({});

            newMessageRef.set({
              id: newMessageRef.key,
              title: data.title,
              subtitle: data.subtitle
            });
          }
        }
      ]
    });
    prompt.present();
  }

  deleteMessage(messageID: string): void {
    this.messagesList.remove(messageID);
  }

  editMessage(messageID: string): void {
    let prompt = this.alertCtrl.create({
      title: 'Message Name',
      message: "Tap your message",
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
            this.messagesList.update(messageID, {
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
