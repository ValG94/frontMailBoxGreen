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

// pour le post et le put, il faut mettre les données de la nouvelle carte/ de l'update


  constructor(private http: HttpClient) {

  }

  getChallengeList(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.baseAPIUrl + 'challenges');
  }

// NB: modification de l'api pour créer la requête correspondante (find by id)
  getChallengeContentByChallengeId(id: number): Observable<ContentChallenge[]> {
    return this.http.get<ContentChallenge[]>(this.baseAPIUrl + 'challenges/' + id);
  }
}
