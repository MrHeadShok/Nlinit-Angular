import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class UserfirestoreService {

  collectioname = "user";

  constructor(public firestore: AngularFirestore) { }

  

  create_user(record) {
    return this.firestore.collection(this.collectioname).add(record);
  }

  read_user() {
    return this.firestore.collection(this.collectioname).snapshotChanges();
  }
  
  update_user(record, recordID) {
    return this.firestore.doc(this.collectioname + '/' + recordID).update(record);
  }

  delete_user(record_id) {
    return this.firestore.doc(this.collectioname+'/'+record_id).delete();
  }




}
