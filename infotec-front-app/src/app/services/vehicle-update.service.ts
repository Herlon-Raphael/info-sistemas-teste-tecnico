import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleUpdateService {
  private vehiclesUpdatedSource = new Subject<void>();
  vehiclesUpdated$ = this.vehiclesUpdatedSource.asObservable();

  triggerVehiclesUpdate() {
    this.vehiclesUpdatedSource.next();
  }
}
