import { ShowUserComponent } from './pags/show-user/show-user.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SingInComponent } from './component/sing-in/sing-in.component';
import { ShowTestsComponent } from './pags/show-tests/show-tests.component';
import { ShowSingleTestComponent } from './pags/show-single-test/show-single-test.component';
import { AddExamComponent } from './admin/add-exam/add-exam.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { ShowEditExamComponent } from './admin/show-edit-exam/show-edit-exam.component';

const routes: Routes = [
{path:'singin/userForm' , component : UserFormComponent},//regester
   {path:'singin' , component : SingInComponent},//login
    {path:'showExams' , component : ShowTestsComponent},
    {path:'showSingleExam/:id' , component : ShowSingleTestComponent},
     {path:'users' , component : ShowUserComponent},
     {path:'addExam' , component : AddExamComponent},
     {path:"dashbord", component:DashbordComponent},
     {path:"adminExam",component:ShowEditExamComponent},
     {path:"adminShowExam",component:ShowEditExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
