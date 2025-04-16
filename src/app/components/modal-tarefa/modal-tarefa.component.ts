//import { Component } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      descricao: ['', Validators.required, Validators.maxLength(255)],
      concluida: [false]
    });
  }

}
