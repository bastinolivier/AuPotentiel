import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { AlertComponent } from './Login/login/alert/alert.component';
import { LoginComponent } from './Login/login/login.component';
import { SigninComponent } from './Login/signin/signin.component';
import { ErrorInterceptor } from './Login/_helpers/error.interceptor';
import { fakeBackendProvider } from './Login/_helpers/fake-backend';
import { JwtInterceptor } from './Login/_helpers/jwt.interceptor';
import { ContactComponent } from './UserAuth/contact/contact.component';
import { UserPageComponent } from './UserAuth/user-page.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CandidateComponent } from './candidate/candidate.component';
import { EmployerComponent } from './employer/employer.component';
import { PostAdComponent } from './employer/post-ad/post-ad.component';
import { ListeCandidateComponent } from './employer/liste-candidate/liste-candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    UserPageComponent,
    AlertComponent,
    ContactComponent,
    HeaderMenuComponent,
    CandidateComponent,
    EmployerComponent,
    PostAdComponent,
    ListeCandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  exports: [
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
    fakeBackendProvider
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
