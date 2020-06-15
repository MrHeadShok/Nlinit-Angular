import { Component, OnInit, ViewChild } from '@angular/core';

import { AppComponent } from 'src/app/app.component';



import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirebasestoreService } from 'src/app/services/firebasestore.service';


interface StudentData {
  Name: string;
  Age: number;
  Address: string;
}


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  studentList = [];
  studentData: StudentData;
  studentForm: FormGroup;
  

  constructor(private firebaseService: FirebasestoreService,
    public fb: FormBuilder) {
    this.studentData = {} as StudentData;
  }

  ionViewWillEnter() {
    AppComponent.isTabVisible = true;

  }

  ngOnInit() {

    this.studentForm = this.fb.group({
      Name: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      Address: ['', [Validators.required]]
    })



    

    this.firebaseService.read_students().subscribe(data => {

      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.studentList);

    });
  }

  CreateRecord() {
    console.log(this.studentForm.value);
    this.firebaseService.create_student(this.studentForm.value).then(resp => {
      this.studentForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_student(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.firebaseService.update_student(recordRow.id, record);
    recordRow.isEdit = false;
  }

}