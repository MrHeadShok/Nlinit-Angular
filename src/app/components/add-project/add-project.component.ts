import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectstoreService } from 'src/app/services/projectstore/projectstore.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
  
export class AddProjectComponent implements OnInit {

  project_form: FormGroup;
  error_messages: string='';

  validation_messages = {
    'pname': [
      { type: 'required', message: 'Project name is required.' },
      {type: 'minlength', message:'Project name must be at least 4 characters long.'}
    ],
    'pinfo': [
      { type: 'required', message: 'Project description is required.' },
      { type: 'minlength', message: 'Project description must be at least 5 characters long.' }
    ],
    'pstart': [
      {type:'required', message:'You have to select a starting date.'}
    ],
    'pend': [
      {type:'required', message:'You have to select an estimated time-limit'}
    ]
}

  constructor(public modalController: ModalController,
    private formBuilder: FormBuilder,
    public projectservice: ProjectstoreService,
  ) { }

  get pname() { return this.project_form.get('pname'); }

  ngOnInit() {
//formcontrol to be added
    this.project_form = this.formBuilder.group({
      pname: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),

      pinfo: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),

      pstart: new FormControl('', Validators.compose([
        Validators.required
      ])),

      pend: new FormControl('', Validators.compose([
        Validators.required
      ]))
})



   }
  
  registerProject() {

    console.log(this.project_form.value);
    let res = this.projectservice.create_project(this.project_form.value)
      this.project_form.reset
    
    this.modalController.dismiss({
      'dismissed': true
    });
    

  }
  
  
  savePoject() {
    console.log("parameters saved")
  }

  dismissModal() {
    this.modalController.dismiss({
    'dismissed': true
  });
  }



  




}


