import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Component({
  selector: 'user-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {
  private _firestore = inject(Firestore);
  @Output() onUserSelect = new EventEmitter<any>();

  entityData = [];

  handleSelect(user): void {
    this.onUserSelect.emit(user);
  }

  ngOnInit(): void {
    const storedData = collection(this._firestore, 'collection');
    const obs = collectionData(storedData)
    obs.subscribe({
      next: (d) => {
        console.log('DDD', d)
        this.entityData = d;
      }
    })
  }
}
