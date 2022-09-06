import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService, private router: Router) { }

  valor: number;
  destino: number;

  ngOnInit(): void {
  }

  transferir() {
    const dadosEmissao: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionarTransferencia(dadosEmissao).subscribe(
      res => {
        this.router.navigateByUrl('extrato');
      },
      error => console.error('Requisição Falhou', error)
    );
  }
}
