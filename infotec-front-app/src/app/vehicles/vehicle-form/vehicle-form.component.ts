import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle-service.service'; 
import { Vehicle } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent {
  vehicleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private router: Router
  ) {
    this.vehicleForm = this.fb.group({
      modelo: ['', Validators.required],  
      marca: ['', Validators.required],
      ano: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],  
      chassi: ['', Validators.required],
      renavam: ['', Validators.required],
      placa: ['', [
        Validators.required, 
        Validators.pattern('^[A-Z]{3}-\\d{4}$|^[A-Z]{3}\\d{1}[A-Z]{1}\\d{2}$')
      ]],     
    });
  }

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const newVehicle: Vehicle = this.vehicleForm.value;
      this.vehicleService.createVehicle(newVehicle).subscribe({
        next: (data) => {
          alert('Veículo adicionado com sucesso!');
          this.router.navigate(['/vehicles']);
        },
        error: (err) => {
          alert('Erro ao adicionar veículo. Tente novamente.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  }

  onReset(): void {
    this.vehicleForm.reset();
  }
}
