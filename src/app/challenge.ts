import {ContentChallenge} from "./contentChallenge";

export interface Challenge {
  id: number;
  nameChallenge: string;
  imgUrl: string;
  description: string
  dateCreation: Date;
  level: number;
  likeChallenge: number;
  contentList: ContentChallenge[];
}
