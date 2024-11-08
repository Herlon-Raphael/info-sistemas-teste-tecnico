// vehicles/vehicles-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehiclesComponent } from './vehicles.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent, 
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: VehicleListComponent },
      { path: 'new', component: VehicleFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule {}
