import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-single-test',
  templateUrl: './show-single-test.component.html',
  styleUrls: ['./show-single-test.component.css']
})
export class ShowSingleTestComponent {
id:any
singleExam:any
exam:any[]=[]

  constructor(private global : GlobalService , private _activatedRoute : ActivatedRoute , private _route : Router){

this.global.getExams().subscribe(res=>{
        this.exam = res.data
      })

      this._activatedRoute.paramMap.subscribe(params=>{
        console.log(params)
        let id = params.get('id')
        global.getSingleExam(id).subscribe(res=>{
          this.singleExam = res.data
        })

      })

}
}
