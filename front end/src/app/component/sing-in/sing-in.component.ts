import { Singin } from 'src/app/interfacess/singin';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';;

import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
model:Singin={
  email:"",
  password:""
}
// submit(form : NgForm){
//   console.log(form);

// }

eMassage = null
  constructor(private global : GlobalService , private router : Router,private Activatedroute : ActivatedRoute){}

  submit(form : NgForm){
    console.log(form)
    if(form.valid){
      this.global.login(this.model).subscribe(res=>{
        console.log(res)
localStorage.setItem('token' , res.data.token)
this.global.isLogin = true
        if(res.apiStatus) this.router.navigateByUrl("")

      }, (e)=>{
        console.log(e.error.message)
        this.eMassage = e.error.message
      })
    }
  }
}
