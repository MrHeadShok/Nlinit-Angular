import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';



import { AuthenticationService } from "../../shared/authentification-service";
import { ToastController, ModalController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
  


export class SignupPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created. Please log in.";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

  navigateToLoginPage() {
    this.router.navigate(['login']);
  }


}