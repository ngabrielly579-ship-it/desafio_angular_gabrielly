import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Veiculo, VeiculosAPI } from '../models/veiculo.model';
import { VeiculoData } from '../models/veiculo-data.model';

@Injectable({ providedIn: 'root' })
export class VeiculoService {
  private api = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  listarVeiculos(): Observable<Veiculo[]> {
    return this.http.get<VeiculosAPI>(`${this.api}/vehicles`).pipe(
      map(res => res.vehicles)
    );
  }

  buscarPorVin(vin: string): Observable<VeiculoData> {
    return this.http.post<any>(`${this.api}/vehicleData`, { vin }).pipe(
      map(res => ({
        id: res.id,
        vin,
        odometer: res.odometro,
        tirePressure: 'Não informado',
        status: res.status,
        batteryStatus: 'Não informado',
        fuelLevel: res.nivelCombustivel,
        lat: res.lat,
        long: res.long
      }) as VeiculoData)
    );
  }
}
