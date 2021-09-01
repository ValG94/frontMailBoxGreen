import { Component, OnInit } from '@angular/core';
import {Challenge} from "../challenge";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {



  // Je crée mon objet JS qui représente le formulaire d'édition d'une carte du timeline
  //challengeForm = this.formBuilder.group({
    //likeChallenge: ''
  //});

  //challengeList: Challenge[]=[];

  challengeList = this.apiService.getChallengeList();

  // @ts-ignore
  likes = this.apiService.updateLike();
  //formBuilder: any;


   // @ts-ignore
  updateLikes(challenge){
   challenge.likeChallenge++;
  }

 /* onLikesEdit(challenge : Challenge) {
    this.challenge.patchValue({
      likeChallenge: challenge.likeChallenge
    });}*/

  // Définition du constructeur
  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  //this.apiService.getChallengeList().subscribe(challengeList=> this.challengeList= challengeList);
this.apiService.getChallengeList()


  }

}
