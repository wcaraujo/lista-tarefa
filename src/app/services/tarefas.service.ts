import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TarefasRequest } from '../models/request/tarefa-request';
import { Observable } from 'rxjs';
import { TarefasResponse } from '../models/response/tarefa-response';
import { environment } from '../../environments/environment';
import { TarefasFiltroRequest } from '../models/request/tarefa-filtro-request';

@Injectable({
  providedIn: 'root'
})

export class TarefasService {

  private readonly baseApi = environment.baseApi;

  constructor(private httpClient:HttpClient) { }

  getAll(tarefaFiltroRequest:TarefasFiltroRequest) : Observable<TarefasResponse[]> {    
    let params = new HttpParams();

    if (tarefaFiltroRequest.description) {
      params = params.set('description', tarefaFiltroRequest.description)
    }

    params = params.set('page', tarefaFiltroRequest.page);
    params = params.set('pageSize', tarefaFiltroRequest.pageSize);

    return this.httpClient.get<TarefasResponse[]>(this.baseApi, { params });
  }

  getById(id:number) {
    return this.httpClient.get<TarefasResponse>(this.baseApi + id);
  }

  create(tarefaFiltroRequest:TarefasRequest) {
    return this.httpClient.post<TarefasResponse>(this.baseApi, tarefaFiltroRequest);
  }

  update(id:number, tarefaFiltroRequest:TarefasRequest) {
    return this.httpClient.put<TarefasResponse>(this.baseApi + id, tarefaFiltroRequest);
  }

  delete (id:number) {
    return this.httpClient.delete<TarefasResponse>(this.baseApi + id);
  }
}
