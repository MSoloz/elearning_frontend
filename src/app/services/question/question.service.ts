import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  
  private apiServerUrl = "http://localhost:8000/api";

  constructor(private http:HttpClient) { }

  generateQuestion(data:any){

    return this.http.post(`${this.apiServerUrl}/question/generate/`, data);
  
    
   }    
  




}
