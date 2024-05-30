import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {

  constructor() { }

  private _firestore = inject(Firestore);


  create(formData: any): void {
    const storedData = collection(this._firestore, 'icecream');

    addDoc(storedData, { ...formData });
  }
}
