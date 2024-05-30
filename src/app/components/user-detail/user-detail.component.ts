import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  @Input() name: string;
  @Input() age: number;
  @Input() country: string;
  @Input() flag: string;
  @Input() dni: number;
  @Input() hasCar: boolean;
  @Input() quantity: number;


}
