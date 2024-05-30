import { Component } from '@angular/core';
import { IceCreamListComponent } from '../../components/ice-cream-list/ice-cream-list.component';
import { CommonModule } from '@angular/common';
import { CreateIceCreamComponent } from '../../components/create-ice-cream/create-ice-cream.component';

@Component({
  selector: 'app-ice-cream',
  standalone: true,
  imports: [
    IceCreamListComponent,
    CommonModule,
    CreateIceCreamComponent
  ],
  templateUrl: './ice-cream.component.html',
  styleUrl: './ice-cream.component.scss'
})
export class IceCreamComponent {

}
