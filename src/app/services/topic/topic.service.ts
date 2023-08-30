import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private apiServerUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }


  getAllTopics() { 

    return this.http.get(`${this.apiServerUrl}/course/all`);
  
  }

 getTopicById(id:any) {  


  return this.http.get(`${this.apiServerUrl}`+'/'+id+'/');


     }

 createTopic(data:any){


  return this.http.post(`${this.apiServerUrl}/course/create`, data);

  
 }    

 
 updateTopic(id:any,data:any){


  return this.http.put(`${this.apiServerUrl}/university/update/`+id, data);

  
 }    


 deleteTopicById(id:any){

  return this.http.delete(`${this.apiServerUrl}/university/delete/`+id);

}


}
