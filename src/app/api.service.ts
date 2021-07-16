import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Challenge} from "./challenge";
import {ContentChallenge} from "./contentChallenge";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {


// branchement sur l'API
  baseAPIUrl = "http://localhost:8080/api/";
// pour le post et le put, il faut mettre les données de la nouvelle carte/ de l'update


  constructor(private http: HttpClient) {
  }

  //Récupération de la liste des challenges
getChallengeList() {
  return this.http.get<Challenge[]>(this.baseAPIUrl + 'challenges');
}

<<<<<<< HEAD
//Update des likes pour chacun des challenges
    updateLike(chalenge: Challenge): Observable<Challenge>{
    return this.http.put<Challenge>(this.baseAPIUrl, chalenge);
  }
=======
getChallengeById(id: number): Observable<Challenge>{
  return this.http.get<Challenge>(this.baseAPIUrl + 'challenges/' + id);
}
>>>>>>> 235825b387e8a92123b44e2adbdf9ef7bb8dd0ce

// NB: modification de l'api pour créer la requête correspondante (find by id)
  getChallengeContentListByChallengeId(challengeId: number): Observable<ContentChallenge[]> {
    return this.http.get<ContentChallenge[]>(this.baseAPIUrl + 'challenges/'+ challengeId+ 'contents');
  }
}
