import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTarefaComponent } from '../../components/modal-tarefa/modal-tarefa.component';
import { TarefasService } from '../../services/tarefas.service';
import { TarefasResponse } from '../../models/response/tarefa-response';
import { TarefasFiltroRequest } from '../../models/request/tarefa-filtro-request';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tarefas-page',
  standalone: false,
  templateUrl: './tarefas-page.component.html',
  styleUrl: './tarefas-page.component.css'
})
export class TarefasPageComponent implements OnInit {

  tarefas: TarefasResponse[] = [];
  tarefaFiltroRequest!: TarefasFiltroRequest;
  dataSource: MatTableDataSource<TarefasResponse> = new MatTableDataSource<TarefasResponse>();
  displayedColumns: string[] = ['description', 'completed', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator();
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(
    public matDialog: MatDialog,
    private tarefaService: TarefasService
  ) { }

  ngOnInit(): void {
    this.tarefaFiltroRequest = {
      page: 0,
      pageSize: 10
    }

    this.carregarTarefas();
  }

  abrirModalCadastroTarefa() {
    const tarefaDialog = this.matDialog.open(ModalTarefaComponent, {
      width: "800px",
      height: "500px"
    });

    tarefaDialog.afterClosed().subscribe(() => this.carregarTarefas());
  }

  carregarTarefas(): void {
    this.tarefaService.getAll(this.tarefaFiltroRequest).subscribe(resposta => {
      this.tarefas = resposta;
      this.dataSource = new MatTableDataSource<TarefasResponse>(this.tarefas);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.firstPage();
    });

  }
}
