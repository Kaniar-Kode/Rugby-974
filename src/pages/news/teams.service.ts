import { Injectable } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './array-teams';

@Injectable()
export class TeamsService {

    private teams: Array<Team> = TEAMS;

    constructor() {

    }

    getTeamsIDs(): Array<string> {
        let IDs: Array<string> = new Array();

        for (let i in this.teams) {
            IDs.push(this.teams[i].id);
        }
        return IDs;
    }

    getTeamsNames(): Array<string> {
        let names: Array<string> = new Array();

        for (let i in this.teams) {
            names.push(this.teams[i].name);
        }
        return names;
}

    getTeamsFilesNames(): Array<string> {
        let filesNames: Array<string> = new Array();

        for (let i in this.teams) {
            filesNames.push(this.teams[i].fileName);
        }
        return filesNames;
    }
}