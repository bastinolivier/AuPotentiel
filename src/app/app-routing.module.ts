import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Login/signin/signin.component';
import { AuthGuard } from './Login/_helpers/auth.guard';
import { UserPageComponent } from './UserAuth/user-page.component';
import { ContactComponent } from './UserAuth/contact/contact.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login/login.component';
import { CandidateComponent } from './candidate/candidate.component';
import { EmployerComponent } from './employer/employer.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'employer', component: EmployerComponent },
  { path: 'candidate', component: CandidateComponent, canActivate: [AuthGuard]},
  { path: 'userAuth', component: UserPageComponent, canActivate: [AuthGuard]}, 
  {path: 'humanRessource' , component: ContactComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }