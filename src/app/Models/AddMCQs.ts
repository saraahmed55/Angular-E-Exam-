import { CorrectMcqEnum } from "./CorrectMcqEnum";
import { DeficultyEnum } from "./DeficultyEnum";

export class AddMCQs {
  chapters_id:any;
  difficulty:DeficultyEnum;
  question_text:string;
  answer1:String;
  answer2:String;
  answer3:String;
  answer4:String;
  grade:any;
  CorrectAnswer:CorrectMcqEnum;


}
