import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Challenge} from "./challenge";
import { Observable } from 'rxjs';

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
  return this.http.get<Challenge[]>(this.baseAPIUrl + "challenges");
}

//update du like à faire dans la bdd

// Liste des questions par challenge => []
// getCardsListByTimelineId(timelineId: number) {
//   return this.http.get<Card[]>(this.baseAPIUrl + 'timeline/'+timelineId+'/card');
// }
//

}
