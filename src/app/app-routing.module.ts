import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasPageComponent } from './pages/tarefas-page/tarefas-page.component';

const routes: Routes = [

  { path: '', component: TarefasPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
