import {Component, OnInit} from '@angular/core';
import {Challenge} from "../challenge";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import {ContentChallenge} from "../contentChallenge";
import {Observable, Subscription} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  //variables de jeu
  //Liste des questions
  questionList: ContentChallenge[] = [];
  //La questiion en cours
  questionToAnswer: ContentChallenge | undefined;
  //La bonne réponse:
  rightAnswer: string | undefined;
  isRightAnswer: boolean = false;
  //Pour compter le nombre de points de l'utilisateur
  counter: number = 0;

  // Formulaire de réponse
  guessForm = this.formBuilder.group({
    answers: ''
  });


  // Définition du constructeur
  constructor(private route: ActivatedRoute, private apiService: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    // First get the id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const challengeIdFromRoute = Number(routeParams.get('id'));

    this.apiService.getChallengeContentListByChallengeId(challengeIdFromRoute).subscribe(contentChallengeFromApi => {
      // Get the questionList from the API
      this.questionList = contentChallengeFromApi;
      console.log(this.questionList);
      console.log(contentChallengeFromApi);
      // show 1 question
      this.questionToAnswer = this.questionList.pop();
      // },(error: any) => { /* handle error */ }   );
    })
  }


// Je vérifie la réponse à la question
  guessQuestion() {
    if (this.questionToAnswer) {
      const rightAnswer = this.questionToAnswer.answers;
      //Si la réponse est bonne, je gagne des points
      if (rightAnswer === this.guessForm.get('answers')?.value) {
        this.counter++;
        this.isRightAnswer = true;
      } else {
        this.isRightAnswer = false;
      }
      //Je passe à la question suivante
      this.questionToAnswer = this.questionList.pop();
    }
  }
}



