import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasPageComponent } from './pages/tarefas-page/tarefas-page.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { MenuPageComponent } from './shared/components/menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasPageComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
