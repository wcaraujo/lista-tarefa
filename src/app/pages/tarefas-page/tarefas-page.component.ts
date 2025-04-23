import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTarefaComponent } from '../../components/modal-tarefa/modal-tarefa.component';
import { TarefasService } from '../../services/tarefas.service';
import { TarefasResponse } from '../../models/response/tarefa-response';
import { TarefasFiltroRequest } from '../../models/request/tarefa-filtro-request';

@Component({
  selector: 'app-tarefas-page',
  standalone: false,
  templateUrl: './tarefas-page.component.html',
  styleUrl: './tarefas-page.component.css'
})
export class TarefasPageComponent implements OnInit {

  tarefas: TarefasResponse[] = [];
  tarefaFiltroRequest!: TarefasFiltroRequest;

  constructor(
    public matDialog: MatDialog,
    private tarefaService: TarefasService
  ) {}

  ngOnInit(): void {
    this.tarefaFiltroRequest = {
      page: 0,
      pageSize: 10
    }

    this.tarefaService.getAll(this.tarefaFiltroRequest).subscribe(resposta => {
      this.tarefas = resposta;
    });
  }

  abrirModalCadastroTarefa() {
    const tarefaDialog = this.matDialog.open(ModalTarefaComponent, {
      width: "800px",
      height: "500px"
    });
  }

}
