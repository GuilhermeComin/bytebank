import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  constructor() { }

  valor: number;
  destino: number;

  ngOnInit(): void {
  }

  transferir() {
    const dadosEmissao = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(dadosEmissao);
  }

}
