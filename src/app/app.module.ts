import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { Login } from '@components/login/login.component';
import { Registration } from '@components/registration/registration.component';
import { Home } from '@components/home/home.component';
import { FindFlight } from '@components/find_flight/find_flight.component';
import { Account } from '@components/account/account.component';
import { TicketDetails } from '@components/ticket/ticket.component';








@NgModule({
  declarations: [
    AppComponent,
    Login,
    Registration,
    Home,
    FindFlight,
    Account,
    TicketDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
