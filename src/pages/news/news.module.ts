import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';

import { ListSeasonsComponent } from './list-seasons';
import { CreateSeasonComponent } from './create-season';
import { EditSeasonComponent } from './edit-season';

import { TeamsService } from './teams.service';


@NgModule({
  declarations: [
    NewsPage,
    ListSeasonsComponent,
    CreateSeasonComponent,
    EditSeasonComponent
  ],
  imports: [
    IonicPageModule.forChild(NewsPage)
  ],
  providers: [
    TeamsService
  ]
})
export class NewsPageModule {}
