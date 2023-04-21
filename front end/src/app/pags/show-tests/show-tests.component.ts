import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-tests',
  templateUrl: './show-tests.component.html',
  styleUrls: ['./show-tests.component.css']
})
export class ShowTestsComponent {
posts:any[] = []
  constructor(public global : GlobalService){
    console.log('constructor')
    console.log(this.global.getExamsStudent)

    this.global.getExamsStudent().subscribe(data=>{
      console.log(data)
      this.posts = data.data
    })

  }
  ngOnInit(){
    console.log("ng on init")
  }
}
