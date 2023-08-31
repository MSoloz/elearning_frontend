import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  loading: boolean = true;
  questionData: Question = {};
  json = { "topic": "multiplication de 1 à 9" };
  response: string = '';
  resultMessage: string = '';
  showProgress: boolean = false;
  progress: number = 0;
  totalQuestions: number = 10; // Change this to the total number of questions

  constructor(private service: QuestionService) {}

  ngOnInit(): void {
    this.generateQuestion();
  }

  generateQuestion() {
    console.log('Generating question...');
    this.service.generateQuestion(this.json)
    .subscribe({
      next: (result) => {
        console.log('Question generated:', result);
        this.questionData = result;
        this.loading = false;
        this.response = '';
        console.log('Question data:', this.questionData);
      }
    });
  }
  getChoicesArray(choices: string | undefined): string[] {
    return (choices || '').split('\n');
  }
  
  submitAnswer() {
    console.log('Submitted answer:', this.response);
    console.log('Solution:', this.questionData.solution);
  
    if (this.response.trim() === this.questionData.solution) {
      console.log('Answer is correct!');
      this.resultMessage = 'Congratulations, your answer is correct!';
      this.progress += 1;
      this.showProgress = true;
      setTimeout(() => {
        this.showProgress = false;
        this.resultMessage = ''; // Clear the message
        this.generateQuestion(); // Fetch a new question
      }, 2000); // Adjust the time as needed (in milliseconds)
    } else {
      console.log('Answer is incorrect.');
      this.resultMessage = 'Oops, your answer is incorrect. Try again!';
    }
  }
  
}
