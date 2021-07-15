import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Challenge} from "./challenge";

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

// Liste des questions par challenge => []
// getCardsListByTimelineId(timelineId: number) {
//   return this.http.get<Card[]>(this.baseAPIUrl + 'timeline/'+timelineId+'/card');
// }
//

}
