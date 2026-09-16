import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged, filter, map } from 'rxjs';
import { Veiculo } from '../../models/veiculo.model';
import { VeiculoData } from '../../models/veiculo-data.model';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  veiculos: Veiculo[] = [];
  veiculoSelecionado?: Veiculo;
  dados?: VeiculoData;
  vin = '2FRHDUYS2Y63NHD22454';
  mensagemVin = '';
  private pesquisaVin = new Subject<string>();
  private inscricao?: Subscription;

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.veiculoService.listarVeiculos().subscribe({
      next: lista => {
        this.veiculos = lista;
        this.veiculoSelecionado = lista.find(v => v.vehicle === 'Mustang') || lista[0];
      }
    });

    this.inscricao = this.pesquisaVin.pipe(
      map(valor => valor.trim().toUpperCase()),
      debounceTime(500),
      distinctUntilChanged(),
      filter(valor => valor.length >= 8)
    ).subscribe(valor => this.buscarVin(valor));

    this.pesquisaVin.next(this.vin);
  }

  selecionarVeiculo(id: string): void {
    this.veiculoSelecionado = this.veiculos.find(v => String(v.id) === id);
  }

  digitouVin(valor: string): void {
    this.vin = valor;
    this.pesquisaVin.next(valor);
  }

  buscarVin(valor = this.vin): void {
    this.mensagemVin = '';
    this.veiculoService.buscarPorVin(valor).subscribe({
      next: res => this.dados = res,
      error: () => {
        this.dados = undefined;
        this.mensagemVin = 'VIN não encontrado.';
      }
    });
  }

  imagemVeiculo(): string {
    const nome = this.veiculoSelecionado?.vehicle.toLowerCase() || '';
    if (nome.includes('mustang')) return 'assets/img/mustang.png';
    if (nome.includes('territory')) return 'assets/img/territory.png';
    if (nome.includes('bronco')) return 'assets/img/broncoSport.png';
    return 'assets/img/ranger.png';
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }
}
