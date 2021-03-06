import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github.service";
import {IProfile} from "../../model/IProfile";
import {IRepository} from "../../model/IRepository";

@Component({
  selector: 'app-githubapp',
  templateUrl: './githubapp.component.html',
  styleUrls: ['./githubapp.component.css']
})
export class GithubappComponent implements OnInit {

  public githubuser: string;
  public githubProfile :IProfile;
  public githubRepo : IRepository[];


  constructor(private gitHubservice:GithubService) { }

  ngOnInit(): void {
  }

  public submitform(){
//Profile Search

    this.gitHubservice.searchProfile(this.githubuser).subscribe( (data) => {
      this.githubProfile=data;
      console.log(data);
      });

    //Repos Search

    this.gitHubservice.searchRepos(this.githubuser).subscribe((data)=>{
      this.githubRepo = data;
      console.log(data);
    })


    }




  }




