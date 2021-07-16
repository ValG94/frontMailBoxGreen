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

getChallengeList() {
  return this.http.get<Challenge[]>(this.baseAPIUrl + 'challenges');
}

getChallengeById(id: number): Observable<Challenge>{
  return this.http.get<Challenge>(this.baseAPIUrl + 'challenges/' + id);
}

// NB: modification de l'api pour créer la requête correspondante (find by id)
  getChallengeContentByChallengeId(challengeId: number, contentId: number): Observable<ContentChallenge[]> {
    return this.http.get<ContentChallenge[]>(this.baseAPIUrl + 'challenges/'+ challengeId+ 'contents/' + contentId);
  }
}
