//import { Component } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TarefasRequest } from '../../models/request/tarefa-request';
import { TarefasService } from '../../services/tarefas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-tarefa',
  standalone: false,
  templateUrl: './modal-tarefa.component.html',
  styleUrl: './modal-tarefa.component.css'
})
export class ModalTarefaComponent implements OnInit {

  formGroup!: FormGroup; 

  constructor(
    public matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private tarefaService: TarefasService,
    private matSnackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      description: ['', Validators.required, Validators.maxLength(255)],
      completed: [false]
    });
  }

  salvar(): void {
    const tarefa: TarefasRequest = this.formGroup.getRawValue();

    this.tarefaService.create(tarefa).subscribe({
      next: () => {
        this.matSnackbar.open('Tarefa cadastrada com sucesso!', 'Fechar')
        this.matDialog.closeAll();
      },
      error: () => {
        this.matSnackbar.open('Erro ao cadastrar tafefa!')
      }
    })
  }
}
