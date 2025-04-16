import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTarefaComponent } from '../../components/modal-tarefa/modal-tarefa.component';

@Component({
  selector: 'app-tarefas-page',
  standalone: false,
  templateUrl: './tarefas-page.component.html',
  styleUrl: './tarefas-page.component.css'
})
export class TarefasPageComponent {

  constructor(public matDialog: MatDialog) {}

  abrirModalCadastroTarefa() {
    const tarefaDialog = this.matDialog.open(ModalTarefaComponent, {
      width: "800px",
      height: "500px"
    });
  }

}
