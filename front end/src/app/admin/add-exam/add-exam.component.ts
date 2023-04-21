import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Exam } from 'src/app/interfacess/singin';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent {
model : Exam ={
    subject: '',
    questions: [
      {
      que:'',
      answre:'',
        Options:["","",""]

    }],

  }
msgError:any = null
constructor(private global : GlobalService ,private _router:Router){}
  handleSubmit(form : NgForm){

    if(form.valid){
      this.global.addExam(this.model).subscribe(res=>{

        if(res.apiStatus)
        {this._router.navigateByUrl("/showExams");
      }

      }, (e)=>{
        console.log(e.error.message)
        this.msgError = e.error.message
      })
    }
  }



}
