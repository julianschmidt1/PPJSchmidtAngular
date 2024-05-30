import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { UserTableComponent } from '../../components/user-table/user-table.component';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    UserTableComponent,
    UserDetailComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  private _firestore = inject(Firestore);
  entityData = [];
  selectedUserData;

  ngOnInit(): void {
    const storedData = collection(this._firestore, 'collection');
    const obs = collectionData(storedData)
    obs.subscribe({
      next: (d) => {
        this.entityData = d;
      }
    })
  }

  setSelectedUser(user): void {
    console.log('llegok', user);
    this.selectedUserData = user;
  }


}
