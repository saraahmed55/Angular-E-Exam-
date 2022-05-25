import { CorrectTorFEnum } from "./CorrectTorFEnum";
import { DeficultyEnum } from "./DeficultyEnum";

export class TrueOrFalse {
  id:any;
  chapters_id:any;
  difficulty:DeficultyEnum;
  question_text:string;
  grade:any;
  CorrectAnswer:CorrectTorFEnum;
}
