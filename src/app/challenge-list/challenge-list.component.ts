import { Component, OnInit } from '@angular/core';
import {Challenge} from "../challenge";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {


  //challengeList: Challenge[]=[];

  challengeList = this.apiService.getChallengeList();


  // @ts-ignore
  likes(challenge){
    challenge.like++;
  }

  // Définition du constructeur
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  //this.apiService.getChallengeList().subscribe(challengeList=> this.challengeList= challengeList);
this.apiService.getChallengeList()


  }

}
