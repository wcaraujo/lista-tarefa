import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TarefasRequest } from '../models/request/tarefa-request';
import { Observable } from 'rxjs';
import { TarefasResponse } from '../models/response/tarefa-response';

@Injectable({
  providedIn: 'root'
})

export class TarefasService {

  constructor(private httpClient:HttpClient) { }

  getAll(tarefaRequest:TarefasRequest) : Observable<TarefasResponse> {

    return this.httpClient.get<TarefasResponse>("");
  }

  getById(id:number) {

    return this.httpClient.get<TarefasResponse>("" + id);
  }

  create(tarefaRequest:TarefasRequest) {

    return this.httpClient.post<TarefasResponse>("", tarefaRequest);
  }

  update(id:number, tarefaRequest:TarefasRequest) {

    return this.httpClient.post<TarefasResponse>("" + id, tarefaRequest);
  }

  delete (id:number, tarefaRequest:TarefasRequest) {

    return this.httpClient.delete<TarefasResponse>("" + id);
  }
}
