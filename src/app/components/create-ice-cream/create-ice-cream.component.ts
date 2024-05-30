import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IceCreamService } from '../../services/ice-cream.service';

@Component({
  selector: 'create-ice-cream',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './create-ice-cream.component.html',
  styleUrl: './create-ice-cream.component.scss'
})
export class CreateIceCreamComponent {
  entityForm!: FormGroup;

  formBuilder = inject(FormBuilder);
  entityservice = inject(IceCreamService);

  submit(): void {
    if (this.entityForm.valid) {

      console.log(this.entityForm.value);
      try {
        this.entityservice.create(this.entityForm.value);
        this.entityForm.reset();
      } catch (e) {
        console.log('Ocurrio un error');

      }
    } else {
      this.entityForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.entityForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      weight: [0, [Validators.required, Validators.min(1), Validators.max(3000)]],
      price: [0, [Validators.required, Validators.min(1)]],
    });
  }

  get formControls() {
    return this.entityForm.controls;
  }
}
