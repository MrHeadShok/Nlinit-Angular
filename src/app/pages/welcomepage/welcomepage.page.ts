import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.page.html',
  styleUrls: ['./welcomepage.page.scss'],
})
export class WelcomepagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    AppComponent.isTabVisible = false;

  }

  toSignup() {
    this.router.navigate(['signup'])
  }

  toLogin() {
    this.router.navigate(['login'])
  }

}
