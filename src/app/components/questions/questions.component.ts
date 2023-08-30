import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit{

  loading: boolean = true;

  questionData :Question={};

  json ={"topic":"multiplication de 1 à 9"}

  constructor(private service:QuestionService){}

  ngOnInit(): void {

    this.service.generateQuestion(this.json)
    .subscribe({
      next: (result) => {
       console.log(result);
       this.questionData = result;
       this.loading = false; 
       console.log(this.questionData)
      }
    });

  
  }

  response: number | null = null;

  fillTextField(value: number): void {
    this.response = value;
  }

  submitAnswer(){}
}
