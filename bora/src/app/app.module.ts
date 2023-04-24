import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ChatComponent } from './chat/chat.component';
import { ConversasComponent } from './conversas/conversas.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { LoadInicialComponent } from './load-inicial/load-inicial.component';
import { BaseBoraComponent } from './shared/components/base-bora/base-bora.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PaginaInicialComponent,
    CadastroEventoComponent,
    ChatComponent,
    ConversasComponent,
    LoginComponent,
    FeedComponent,
    EditarPerfilComponent,
    LoadInicialComponent,
    BaseBoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
