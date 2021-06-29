import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserfirestoreService } from '../userstore/userfirestore.service';



@Injectable({
  providedIn: 'root'
})
export class ProjectstoreService {

  collectioname = "projects";

  constructor(private firestore: AngularFirestore) { }



  create_project(record) {
    return this.firestore.collection(this.collectioname).add(record);
  }

  read_project() {
    return this.firestore.collection(this.collectioname).snapshotChanges();
  }

  update_project(record, recordID) {
    return   this.firestore.doc(this.collectioname + '/' + recordID).update(record);
  }

  delete_project(record_id) {
    return this.firestore.doc(this.collectioname + '/' + record_id).delete();
  }
}


