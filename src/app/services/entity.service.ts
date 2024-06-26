import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor() { }

  private _firestore = inject(Firestore);


  create(formData: any): void {
    const storedData = collection(this._firestore, 'collection');
    
    addDoc(storedData, { ...formData });
  }
}
