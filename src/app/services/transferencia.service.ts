import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];
  private URL = 'http://localhost:3000/transferencias'

  constructor(private HttpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  listarTodas(): Observable<Transferencia[]> {
    return this.HttpClient.get<Transferencia[]>(this.URL)
  }

  adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);

    return this.HttpClient.post<Transferencia>(this.URL, transferencia);
  }

  hidratar(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
