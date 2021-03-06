import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {IProfile} from "../model/IProfile";
import {IRepository} from "../model/IRepository";
import {CLIENT_ID, CLIENT_SECRET} from '../credentials/githubCredentials';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private  httpClient:HttpClient) { }

  //Search Profile

  // search Profile
  public searchProfile(githubUser):Observable<IProfile>{
    let dataURL:string = `https://api.github.com/users/${githubUser}`;
    return this.httpClient.get<IProfile>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  //search Repos
public  searchRepos(githubUsser):Observable<IRepository[]>{
let dataURL:string=`https://api.github.com/users/${githubUsser}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
 return this.httpClient.get<IRepository[]>(dataURL).pipe(
   retry(1),
   catchError(this.handleError)
 );

}

public handleError(error:HttpErrorResponse){
    let errorMessage:string = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`
    }
    else{

      errorMessage= `Status :${error.status} \n Meassage : ${error.message}`
    }
    return throwError(errorMessage);

}

}
