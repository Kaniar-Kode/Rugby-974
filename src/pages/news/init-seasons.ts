export class InitSeasons {
    years: Array<string>;
    categories: Array<string>;
    numberTeams: Array<number>;
    numberPhases: Array<number>;
    numberWeeks: Array<number>;

    constructor() {
        this.initArray()
        this.initYears();
        this.initCategories();
        this.initTeamsNumbers();
        this.initPhasesNumbers();
        this.initPhasesLapse();
    }

    initArray() {
        this.years = new Array();
        this.categories = new Array();
        this.numberTeams = new Array();
        this.numberPhases = new Array();
        this.numberWeeks = new Array();
    }

    initYears() {
        let year = new Date().getFullYear();

        for (let i = 0; i < 5; i++) {
            this.years.push(year + "-" + (year + 1));
            year++;
        }
    }

    initCategories() {
        this.categories.push("Minime (U14)");
        this.categories.push("Teulière (U16)");
        this.categories.push("Phliponneau (U18)");
        this.categories.push("Promotion Honneur (PH)");
        this.categories.push("Honneur (H)");
        this.categories.push("Top 6 Océan Indien");
    }

    initTeamsNumbers() {
        for (let i = 2; i < 10; i++) {
            this.numberTeams.push(i);
        }
    }

    initPhasesNumbers() {
        for (let i = 2; i < 5; i++) {
            this.numberPhases.push(i);
        }
    }

    initPhasesLapse() {
        for (let i = 2; i < 9; i++) {
            this.numberWeeks.push(i);
        }
    }

}