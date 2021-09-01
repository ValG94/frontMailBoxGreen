import {Injectable} from '@angular/core';
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

// TODO pour le post et le put, il faut mettre les données de la nouvelle carte/ de l'update


  constructor(private http: HttpClient) {
  }

  //Récupération de la liste des challenges
  getChallengeList() {
    return this.http.get<Challenge[]>(this.baseAPIUrl + 'challengeList');
  }


//Update des likes pour chacun des challenges
  updateLike(challenge: Challenge): Observable<Challenge> {
    return this.http.put<Challenge>(this.baseAPIUrl, challenge);
  }

  getChallengeById(id: number): Observable<Challenge> {
    return this.http.get<Challenge>(this.baseAPIUrl + 'challengeList/' + id);
  }


// TODO: modification de l'api pour créer la requête correspondante (find by id) => utilisation dans le play
  getChallengeContentListByChallengeId(challengeId: number): Observable<ContentChallenge[]> {
    return this.http.get<ContentChallenge[]>(this.baseAPIUrl + 'challenges/' + challengeId + '/contents');
  }
}
