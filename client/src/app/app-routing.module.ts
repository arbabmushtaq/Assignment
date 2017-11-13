import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/gaurds/auth-guard.service';
import { NotAuthGuard } from './services/gaurds/not-auth-guard.service';

const  myRoutes = RouterModule.forRoot([
 
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  }
  
]);


@NgModule({
  declarations: [],
  imports: [ myRoutes ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModules { }
