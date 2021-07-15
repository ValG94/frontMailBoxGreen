import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PlayComponent} from './play/play.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    ChallengeListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '', component: HomeComponent
    },{path:'challengeList', component: ChallengeListComponent},
      {path: 'play/:id', component: PlayComponent}]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
