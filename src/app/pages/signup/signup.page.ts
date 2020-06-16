import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { AuthenticationService } from "../../shared/authentification-service";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { UserfirestoreService } from 'src/app/services/userstore/userfirestore.service';


interface User{
  fullname: string;
  role: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
  


export class SignupPage implements OnInit {
//authentication
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  //userInfo
  userList = [];
  userData: User;
  




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
    public userservice :UserfirestoreService,
    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.userData = {} as User;
  }

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

      fullname: ['', [Validators.required]],
    });

    this.userservice.read_user().subscribe(data => {
      this.userList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          fullname: e.payload.doc.data()['fullname'],
        };
      })
      console.log(this.userList);
})



    }

  ionViewWillEnter() {
    AppComponent.isTabVisible = false;

  }


  addUser() {
    console.log(this.validations_form.value);
    this.userservice.create_user(this.validations_form.value).then(resp => {
      this.validations_form.reset();
    })
      .catch(error => {
        console.log(error);
      });
}

  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created. Please log in.";

        console.log(this.validations_form.value);
        this.userservice.create_user(this.validations_form.value).then(resp => {
          this.validations_form.reset();
        })
          .catch(error => {
            console.log(error);
          });

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

  

  


 





