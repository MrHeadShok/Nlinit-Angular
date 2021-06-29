import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TaskstoreService {

  constructor(private fireStore: AngularFirestore) { }

  collectionName = "tasks";

  create_tasks(record) {
    return this.fireStore.collection(this.collectionName).add(record);
  }

  read_task() {
    return this.fireStore.collection(this.collectionName).snapshotChanges();
  }

  update_task(recordID, record) {
    return this.fireStore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_task(record_id) {
    return this.fireStore.doc(this.collectionName + '/' + record_id).delete();
  }
}
