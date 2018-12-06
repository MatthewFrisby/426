import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login } from '@components/login/login.component';
import { Registration } from '@components/registration/registration.component';
import { Home } from '@components/home/home.component';
import { Far } from '@components/far/far.component';
import { First } from '@components/first/first.component';




const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: Login},
  {path: 'register', component: Registration},
  {path: 'home', component: Home},
  {path: 'far', component: Far},
  {path: 'first', component: First},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
