import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.page.html',
  styleUrls: ['./startpage.page.scss'],
})
export class StartpagePage implements OnInit {

  constructor(private router: Router) { }

  navigateToSignUp(){
    this.router.navigate(['welcomepage'])
  }

  ionViewWillEnter() {
    AppComponent.isTabVisible = false;

  }

  ngOnInit() {
  }

}
