import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {FlightService } from '@services/flight.service';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  providers: [FlightService]
})


export class Login implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private flight: FlightService
    ) {
        // redirect to home if already logged in

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.flight.loginUser(this.loginForm.value)
            .pipe(first())
            .subscribe(
                data => {

                    this.router.navigate(['']);
                },
                error => {

                    this.loading = false;
                });
    }
}
