import {ContentChallenge} from "./contentChallenge";

export interface Challenge {
  id: number;
  name: string;
level: number;
like: number;
contentList: ContentChallenge[];
}
