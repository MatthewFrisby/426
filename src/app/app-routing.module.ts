import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login } from '@components/login/login.component';
import { Registration } from '@components/registration/registration.component';
import { Password } from '@components/password/password.component';





const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: Login},
  {path: 'register', component: Registration},
  {path: 'password', component: Password}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
