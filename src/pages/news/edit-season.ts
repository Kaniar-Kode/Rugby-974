import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

import { Season } from './season';


@Component({
    selector: 'edit-season',
    templateUrl: 'edit-season.html'
})
export class EditSeasonComponent { 
    
    @Input() setSeason: Season;

      teamsIDs: Array<string>;
      teamsNames: Array<string>;
      teamsPaths: Array<string>;
    
      path: string;
      fName: string;
      fileName: string;
      extension: string;
    
      filesNames: Array<string>;
      teamsFilesNames: Array<string>;
    
      myArray: Array<any> = new Array();
      names = ["Booba", "Booboo", "Boom"];
      numbers = [1, 2, 3, 4, 5, 6, 7];
      indexArray = 0;
    
      constructor(
        private alertCtrl: AlertController,
        private datePicker: DatePicker) { }
    
      ngOnInit(): void {
    
        this.myArray.push(this.names, this.numbers);
        
        this.path = "../../assets/imgs/"
        this.fName = "rct";
        this.extension = ".png";
    
        this.fileName = "unknown";
    
      }


    previousWeek(): void {
        if (this.indexArray > 0) {
          this.indexArray--;
        }
      }
   
      nextWeek(): void {
       if (this.indexArray < 1) {
         this.indexArray++;
       }
      }
   
   
   /*
      getNumberOfWeeks(): number {
       return parseInt(this.season.nWeeks);
      }
   
      getNumberOfPhases(): number {
        return parseInt(this.season.nPhases);
      }*/
   
   
     chooseDate(): void {
       this.datePicker.show({
         date: new Date(),
         mode: 'date',
         androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
       }).then(
         date => console.log('Got date: ', date),
         error => console.log('Error occured while getting date: ', error)
         );
     }
   
     chooseTeam(): void {
       let radioAlert = this.alertCtrl.create();
       radioAlert.setTitle("Équipes");
   
       for (let i in this.teamsIDs) {
         radioAlert.addInput({
           type: 'radio',
           label: this.teamsNames[i],
           value: this.teamsIDs[i],
           checked: false
         })
       }
   
       radioAlert.addButton("Annuler");
       radioAlert.addButton({
         text: 'OK',
         handler: data => {
           //console.log(data);
           this.getImageFileName(data);
   
         }
       });
       radioAlert.present();
     }
   
     getImageFileName(id?: string): void {
       for (let i in this.teamsIDs) {
         if (id == this.teamsIDs[i]) {
           this.fileName = this.teamsFilesNames[i];
         }
       }
     }
   /*
     exemptTeam(): boolean {
       if (!(parseInt(this.season.nTeams) % 2 == 0) && this.season.nTeams != undefined) {
         return true;
       } else {
         return false;
       }
     }*/
}

