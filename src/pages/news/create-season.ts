import { Component, Input } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

import { InitSeasons } from './init-seasons';
import { Season } from './season';


@Component({
    selector: 'create-season',
    templateUrl: "create-season.html"
})
export class CreateSeasonComponent {

    initSeasons: InitSeasons = new InitSeasons();
    @Input() newSeason: Season = new Season();

    seasonsList: AngularFireList<any>;
    seasons: Observable<any[]>;

    constructor(
        public afDatabase: AngularFireDatabase
    ) { }

    buildSeason(): void {
        if (this.emptyField(this.newSeason)) {
            this.seasonsList = this.afDatabase.list('/' + this.newSeason.year + '/' + this.newSeason.category);
            this.seasons = this.seasonsList.valueChanges();

            this.newSeason.createSeason = false;
            this.newSeason.editSeason = true;
            
            let newSeasonRef = this.seasonsList.push('/'+this.newSeason.nWeeks);

            newSeasonRef.set({
                teams: this.newSeason.nTeams,
                phases: this.newSeason.nPhases
            });
        } else {
            console.log("Empty field nigga");
        }

    }

    emptyField(season: Season): boolean {
        if (season.year == undefined || season.category == undefined ||
            season.nTeams == undefined || season.nPhases == undefined ||
            season.nWeeks == undefined) {
            return false
        } else {
            return true;
        }
    }

}