import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login } from '@components/login/login.component';
import { Registration } from '@components/registration/registration.component';
import { Home } from '@components/home/home.component';
import { FindFlight } from '@components/find_flight/find_flight.component';
import { Account } from '@components/account/account.component';
import { TicketDetails } from '@components/ticket/ticket.component';






const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: Login},
  {path: 'register', component: Registration},
  {path: 'home', component: Home},
  {path: 'find_flight/:code', component: FindFlight},
  {path: 'account', component: Account},
  {path: 'ticket/:id', component: TicketDetails}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
