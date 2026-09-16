import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pluck } from 'rxjs';
import { Veiculo, VeiculosAPI } from '../models/veiculo.model';
import { VeiculoData } from '../models/veiculo-data.model';

@Injectable({ providedIn: 'root' })
export class VeiculoService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listarVeiculos(): Observable<Veiculo[]> {
    return this.http.get<VeiculosAPI>(`${this.api}/vehicle`).pipe(
      pluck('vehicles')
    ) as Observable<Veiculo[]>;
  }

  buscarPorVin(vin: string): Observable<VeiculoData> {
    return this.http.post<any>(`${this.api}/vehicleData`, { vin }).pipe(
      map(res => res.vehicleData as VeiculoData)
    );
  }
}
