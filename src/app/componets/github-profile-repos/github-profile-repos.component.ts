import {Component, Input, OnInit} from '@angular/core';
import {IRepository} from "../../model/IRepository";
import {IProfile} from "../../model/IProfile";

@Component({
  selector: 'app-github-profile-repos',
  templateUrl: './github-profile-repos.component.html',
  styleUrls: ['./github-profile-repos.component.css']
})
export class GithubProfileReposComponent implements OnInit {
@Input() githubRepos:IRepository[]=[];
@Input() githubPrfile:IProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
