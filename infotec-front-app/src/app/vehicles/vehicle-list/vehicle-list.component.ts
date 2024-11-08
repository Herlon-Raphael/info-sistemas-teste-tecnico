import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle-service.service';
import { VehicleUpdateService } from 'src/app/services/vehicle-update.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
})
export class VehicleListComponent implements OnInit, OnDestroy {
  vehicles: Vehicle[] = [];
  loading = true;
  private vehiclesUpdatedSubscription: Subscription | undefined;

  constructor(
    private vehicleService: VehicleService,
    private vehicleUpdateService: VehicleUpdateService  
  ) {}

  ngOnInit(): void {
    this.getVehicles();
    this.vehiclesUpdatedSubscription = this.vehicleUpdateService.vehiclesUpdated$.subscribe(() => {
      this.getVehicles();
    });
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (data) => {
        this.vehicles = data;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao carregar veículos:', err);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.vehiclesUpdatedSubscription) {
      this.vehiclesUpdatedSubscription.unsubscribe();
    }
  }
}
