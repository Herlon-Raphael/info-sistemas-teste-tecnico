import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle-service.service';
import { VehicleUpdateService } from 'src/app/services/vehicle-update.service';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.scss'],
})
export class VehicleTableComponent {
  @Input() vehicles: Vehicle[] = [];
  @Input() loading: boolean = false;
  editingVehicle: Vehicle | null = null;
  displayedColumns: string[] = [
    'placa',
    'chassi',
    'renavam',
    'modelo',
    'marca',
    'ano',
    'acoes',
  ];
  dataSource = new MatTableDataSource(this.vehicles)
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private vehicleService: VehicleService, private router: Router, private vehicleUpdateService: VehicleUpdateService ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.vehicles);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onAddVehicle(): void {
    this.router.navigate(['vehicles/new']);
  }

  editVehicle(vehicle: Vehicle): void {
    this.editingVehicle = { ...vehicle };
  }

  saveVehicle(): void {
    if (this.editingVehicle) {
      this.vehicleService
        .updateVehicle(this.editingVehicle.id, this.editingVehicle)
        .subscribe({
          next: () => {
            this.editingVehicle = null; 
            this.vehicleUpdateService.triggerVehiclesUpdate();
            alert('Veículo atualizado com sucesso!');
          },
          error: () => alert('Erro ao atualizar o veículo. Tente novamente.'),
        });
    }
  }

  cancelEdit(): void {
    this.editingVehicle = null;
  }

  deleteVehicle(vehicleId: number): void {
    this.vehicleService.deleteVehicle(vehicleId).subscribe({
      next: () => {
        this.vehicleUpdateService.triggerVehiclesUpdate();
      }
    })
  }
}
