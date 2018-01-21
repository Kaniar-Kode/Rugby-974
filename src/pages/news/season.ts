export class Season {
    year: string;
    category: string;
    nTeams: string;
    nPhases: string;
    nWeeks: string;
    listSeasons: boolean = true;
    createSeason: boolean = false;
    editSeason: boolean = false;

    constructor(year?: string, category?: string, nTeams?: string, nPhases?: string, nWeeks?: string) {
    }

}