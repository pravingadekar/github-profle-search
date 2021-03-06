import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { GithubappComponent } from './componets/githubapp/githubapp.component';
import { GithubProfileComponent } from './componets/github-profile/github-profile.component';
import { GithubProfileCardComponent } from './componets/github-profile-card/github-profile-card.component';
import { GithubProfileDetailsComponent } from './componets/github-profile-details/github-profile-details.component';
import { GithubProfileReposComponent } from './componets/github-profile-repos/github-profile-repos.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubappComponent,
    GithubProfileComponent,
    GithubProfileCardComponent,
    GithubProfileDetailsComponent,
    GithubProfileReposComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
