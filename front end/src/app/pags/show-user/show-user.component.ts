import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {
 students:any[] = []
  constructor(public global : GlobalService){
    console.log('constructor')
    console.log(this.global.getStudents)

    this.global.getStudents().subscribe(data=>{
      console.log(data)
      this.students = data.data
    })

  }
  ngOnInit(){
    console.log("ng on init")
  }
}
