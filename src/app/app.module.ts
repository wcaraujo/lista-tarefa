import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasPageComponent } from './pages/tarefas-page/tarefas-page.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { MenuPageComponent } from './shared/components/menu-page/menu-page.component';
import { ModalTarefaComponent } from './components/modal-tarefa/modal-tarefa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TarefasPageComponent,
    MenuPageComponent,
    ModalTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
