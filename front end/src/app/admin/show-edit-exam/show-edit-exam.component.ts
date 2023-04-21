import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-edit-exam',
  templateUrl: './show-edit-exam.component.html',
  styleUrls: ['./show-edit-exam.component.css']
})
export class ShowEditExamComponent {
posts:any[] = []
exam:any
itemsToDelete: any[] = [];
  constructor(public global : GlobalService){

    console.log(this.global.getExams)

    this.global.getExams().subscribe(data=>{
      console.log(data)
      this.posts = data.data
    })

  }


  onDelete(id: string) {
    fetch(`${this.global.mainUrl}admin/delSingleExam/${id}`, { method: 'DELETE' })
      .then(() => {

        this.posts = this.posts.filter(post => post._id !== id);
      })
      .catch(error => console.error(error));
  }

  
delAll(){this.global.delAllExams().subscribe(res=>{

    },()=>{

    },()=>{

    });
}}





