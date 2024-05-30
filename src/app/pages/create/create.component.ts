import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EntityService } from '../../services/entity.service';
import { CommonModule } from '@angular/common';
import { CountriesTableComponent } from '../../components/countries-table/countries-table.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CountriesTableComponent
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  entityForm!: FormGroup;

  formBuilder = inject(FormBuilder);
  entityservice = inject(EntityService);

  ngOnInit(): void {
    this.entityForm = this.formBuilder.group({
      countryFlag: ['', Validators.required],
      dni: ['', Validators.required],
      name: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(18), Validators.max(80)]],
      quantity: [0, [Validators.required, Validators.min(1)]],
      country: ['', Validators.required],
      hasCar: [false],
    });
  }

  get formControls() {
    return this.entityForm.controls;
  }

  handleSelectCountry(countryData): void {

    console.log(countryData);
    
    this.formControls['country'].setValue(countryData.name);
    this.formControls['countryFlag'].setValue(countryData.flag);
  }

  submit() {

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

}
