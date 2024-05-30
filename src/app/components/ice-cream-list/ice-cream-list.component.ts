import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Component({
  selector: 'ice-cream-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ice-cream-list.component.html',
  styleUrl: './ice-cream-list.component.scss'
})
export class IceCreamListComponent {

  private _firestore = inject(Firestore);
  entityData = [];

  handleSelect(iceCream): void { }

  ngOnInit(): void {
    const storedData = collection(this._firestore, 'icecream');
    const obs = collectionData(storedData);
    obs.subscribe({
      next: (d) => {
        console.log('HELADOS', d)
        this.entityData = d;
      }
    })
  }
}
