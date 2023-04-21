
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

 constructor(private http : HttpClient) { }
mainUrl="http://localhost:5000/api/"
isLogin = false
 getExams():Observable<any>{
    return this.http.get(`${this.mainUrl}admin/showAllExams`)//=>for Admin
  }
getSingleExam(examId:any):Observable<any>{
  return this.http.get(`${this.mainUrl}student/singleExam/${examId}`)//=>for student
}
delSingleExam(examId:any):Observable<any>{
  return this.http.delete(`${this.mainUrl}admin/delSingleExam/${examId}`)//=>for Admin
}

editExam(examId: string, updatedExam: any) {
    return this.http.patch(`${this.mainUrl}admin/editExam/${examId}`, updatedExam);
  }

getStudents():Observable<any>{
  return this.http.get(`${this.mainUrl}admin/showAll`)
}
login(data: any):Observable<any>{
    return this.http.post(`${this.mainUrl}student/login` , data)
  }

  singUp(data:any):Observable<any>{
    return this.http.post(`${this.mainUrl}student/register`,data)
  }

   getExamsStudent():Observable<any>{
    return this.http.get(`${this.mainUrl}student/showExams`)//=>for student
  }

delAllExams():Observable<any>{
  return this.http.delete(`${this.mainUrl}admin/delAllExams`)
}
addExam(data:any):Observable<any>{
  return this.http.post(`${this.mainUrl}exam/addExam`,data)
}
}

