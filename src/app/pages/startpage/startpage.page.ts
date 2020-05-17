import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.page.html',
  styleUrls: ['./startpage.page.scss'],
})
export class StartpagePage implements OnInit {

  constructor(private router: Router) { }

  navigateToSignUp(){
    this.router.navigate(['signup'])
    console.log("start pressed")
  }



  ngOnInit() {
  }

}
