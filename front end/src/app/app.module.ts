import { AdminInterceptor } from './auth/admin.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserFormComponent } from './component/user-form/user-form.component';
import { NavbarComponent } from './shard/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SingInComponent } from './component/sing-in/sing-in.component';
import { ShowTestsComponent } from './pags/show-tests/show-tests.component';
import { ShowSingleTestComponent } from './pags/show-single-test/show-single-test.component';
import { ShowUserComponent } from './pags/show-user/show-user.component';
import { FooterComponent } from './shard/footer/footer.component';
import { AddExamComponent } from './admin/add-exam/add-exam.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { ShowEditExamComponent } from './admin/show-edit-exam/show-edit-exam.component';
import { MyAccountComponent } from './admin/my-account/my-account.component';
@NgModule({
  declarations: [
    AppComponent,
UserFormComponent,
    NavbarComponent,

    SingInComponent,
     ShowTestsComponent,
     ShowSingleTestComponent,
     ShowUserComponent,
     FooterComponent,
     AddExamComponent,
     DashbordComponent,
     ShowEditExamComponent,
     MyAccountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
      provide : HTTP_INTERCEPTORS,
      useClass : AdminInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
