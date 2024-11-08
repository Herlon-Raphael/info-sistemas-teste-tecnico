import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:3000/api/vehicles';

  constructor(private http: HttpClient) {}

  private generateRandomVehicle(): any {
    const placas = [
      'ABC1234', 'DEF5678', 'GHI9101', 'JKL1122', 'MNO3345', 'XYZ5678', 'PQR6789', 'LMN1234', 'OPQ2345', 'RST3456',
      'UVW4567', 'VWX5678', 'IJK1234', 'LMN7890', 'ABC4321', 'DEF8765', 'GHI3210', 'JKL5432', 'MNO6543', 'XYZ7890',
      'QRS2345', 'TUV3456', 'WXY4567', 'ZAB5678', 'CDE6789', 'FGH7890', 'HIJ8901', 'KLM9012', 'NOP0123', 'QRS3456'
    ];

    const marcas = [
      'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Volkswagen', 'Nissan', 'Hyundai', 'Fiat', 'BMW', 'Mercedes-Benz',
      'Audi', 'Kia', 'Jeep', 'Renault', 'Chrysler', 'Peugeot', 'Citroen', 'Mitsubishi', 'Porsche', 'Land Rover',
      'Land Rover', 'Subaru', 'Dodge', 'Mazda', 'Ferrari', 'Lamborghini', 'Bugatti', 'Aston Martin', 'Alfa Romeo', 'Mini'
    ];

    const modelos = [
      'Corolla', 'Civic', 'Fiesta', 'Onix', 'Gol', 'Camry', 'CR-V', 'F-150', 'HB20', 'Palio',
      'Jetta', 'Tiguan', 'Sportage', 'Compass', 'Renegade', 'Sienna', 'Hilux', 'Sandero', 'Kwid', 'A3',
      'A4', 'X1', 'Q5', 'A5', 'Fusion', 'Cherokee', 'Voyage', 'Maverick', 'Kona', 'EcoSport'
    ];

    const anos = [
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
      2020, 2021, 2022, 2023, 2024, 2005, 2006, 2007, 2008, 2009,
      2000, 2001, 2002, 2003, 2004, 1999, 1998, 1997, 1996, 1995
    ];

    const renavams = [
      '1234567890', '9876543210', '1230984567', '4567890123', '1122334455', '9988776655', '6655443322', '2233445566', '8899776655', '6677889900',
      '9876543210', '5554443332', '8765432109', '6655442211', '1122334412', '3344556677', '9988776644', '4433221100', '1234532244', '9922446677',
      '6543219870', '5432108765', '6677885566', '2233441122', '4444555566', '8899887766', '1122336677', '5566778899', '9988775544', '1133557799'
    ];

    const chassis = [
      '1HGCM82633A123456', '1FMCU0GD4CUA234567', '3VWDX7A39EM123456', '1C3CCZAG9CN123456', '1FTFW1ET8BFA12345',
      '2G1WG5EK1A1156789', '5Y2SP63L25Z116789', '1GNKRGKD0HJ123456', '3GTU2UEC7J1234567', '2T1BURHE1DC154321',
      '1N4AL3AP9HC127890', '1FA6P8TH7J5157896', '1HGCR2F89HA123456', '5XYKT3A68CG124567', 'JTHBP5C28C1123456',
      '1FMCU9GD6BU123456', '2C3CDXBG2GH234567', '1FTRX1ET6FKA12345', '1C6RR7LT3HS123456', '1HGBH41JXMN123456',
      '1B3ES56C78D123456', '5FNYF4H54BB134567', '3GNAL2EK5HS123456', '1J8FT47X67D123456', '1C4RJFAG2CC123456',
      '1FMCU0GD4CA123456', '2LMDJ6JK5EB123456', '2C3CC4BB5HH123456', '5FNYF3H56BB234567', '3VWJY7A39FL123456'
    ];

    return {
      placa: placas[Math.floor(Math.random() * placas.length)],
      marca: marcas[Math.floor(Math.random() * marcas.length)],
      modelo: modelos[Math.floor(Math.random() * modelos.length)],
      ano: anos[Math.floor(Math.random() * anos.length)],
      renavam: renavams[Math.floor(Math.random() * renavams.length)],
      chassi: chassis[Math.floor(Math.random() * chassis.length)]
    };
  }

  

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  updateVehicle(id: number, vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.apiUrl}/${id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteAllVehicles(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/all`);
  }

  addRandomVehicles(): boolean {
    const vehicles = Array.from({ length: 10 }, () => this.generateRandomVehicle());
    try {
      vehicles.forEach(vehicle => {
        this.createVehicle(vehicle).subscribe({})
      }) 
      return true
    } catch (error) {
      return false
    }
    
    
  }
}
