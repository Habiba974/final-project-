import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SingUp } from 'src/app/interfacess/singin';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {


model:SingUp={
  fname:"",
lname:"",
email:"",
  password:"",

}

eMassage = null
  constructor(private global : GlobalService , private router : Router){}
  submit(form : NgForm){
    console.log(form)
    if(form.valid){
      this.global.singUp(this.model).subscribe(res=>{
        console.log(res)

        if(res.apiStatus) this.router.navigateByUrl("")

      }, (e)=>{
        console.log(e.error.message)
        this.eMassage = e.error.message
      })
    }
  }


}
