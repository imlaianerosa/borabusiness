import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ChatComponent } from './chat/chat.component';
import { ConversasComponent } from './conversas/conversas.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { LoadInicialComponent } from './load-inicial/load-inicial.component';

const routes: Routes = [{ 
  path: '', component: LoadInicialComponent ,
},
{
  path: 'inicial', component: PaginaInicialComponent ,
},
{
  path: 'login', component: LoginComponent ,
},
{
  path: 'evento', component: CadastroEventoComponent ,
},
{
  path: 'perfil', component: EditarPerfilComponent ,
},
{
  path: 'feed', component: FeedComponent ,
},
{
  path: 'conversas', component: ConversasComponent ,
},
{
  path: 'chat', component: ChatComponent ,
},
{
  path: 'cadastro', component: CadastroComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
