import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { VehicleService } from '../services/vehicle-service.service';
import { VehicleUpdateService } from '../services/vehicle-update.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  isSidenavOpened = true; 
  isSidenavMode: MatDrawerMode = 'side';

  constructor(
    private vehicleService: VehicleService,
    private vehicleUpdateService: VehicleUpdateService 
  ) {}

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  generateRandom() {
    this.vehicleService.addRandomVehicles().valueOf() ? alert('Carros adicionados com sucesso') : alert('Erro ao adicionar carros')
    this.vehicleUpdateService.triggerVehiclesUpdate();
  }
  deleteAll() {
    this.vehicleService.deleteAllVehicles().subscribe({
      next: () => {
        this.vehicleUpdateService.triggerVehiclesUpdate();
      }
    })
    
  }
}
