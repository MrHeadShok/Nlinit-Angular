import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(private menu: MenuController, public router: Router) { }

  ngOnInit() {}

  navigateToDashboard() {
    this.router.navigate(['tabs/tab1'])
    console.log("Directed to dashboard")

  }

  navigateToProjects() {
    this.router.navigate(['projectspage'])
    console.log("Directed to Projects")
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  
}


