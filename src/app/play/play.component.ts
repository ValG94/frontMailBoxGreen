import {Component, OnInit} from '@angular/core';
import {Challenge} from "../challenge";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import {ContentChallenge} from "../contentChallenge";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  //variables de jeu
  questionList: ContentChallenge[] = [];
  questionToAnswer: ContentChallenge | undefined;
  isRightAnswer: boolean | undefined;
  counter: number | undefined;

  // Définition du constructeur
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    // First get the id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const challengeIdFromRoute = Number(routeParams.get('id'));

    this.apiService.getChallengeContentByChallengeId(challengeIdFromRoute).subscribe(contentChallenge => {
     this.questionList = contentChallenge;
      console.log(this.questionList);
      //console.log(challengeContent);
      this.questionToAnswer = this.questionList.pop();
    },(error: any) => { /* handle error */ }   );
  }
}

//
// ngOnInit(): void {
//   this.homeService.getData().subscribe(
//     (data: HomeData) => { this.elements = data; },
//     (error: any) => { /* handle error */ }
//   );
// }
