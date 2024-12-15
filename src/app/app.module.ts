import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { CadastroAdmComponent } from './cadastro-adm/cadastro-adm.component';
import { CadastrarSalaComponent } from './cadastrar-sala/cadastrar-sala.component';
import { CadastroMaterialComponent } from './cadastro-material/cadastro-material.component';
import { CadastroTurmaComponent } from './cadastro-turma/cadastro-turma.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { ListaSalasComponent } from './lista-salas/lista-salas.component';
import { EditarSalaComponent } from './editar-sala/editar-sala.component';
import { ListaTurmasComponent } from './lista-turmas/lista-turmas.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { EditarMaterialComponent } from './editar-material/editar-material.component';
import { ListaMaterialComponent } from './lista-material/lista-material.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaDeLoginComponent,
    ListaProfessoresComponent,
    CadastroProfessorComponent,
    GerenciarComponent,
    CadastroAdmComponent,
    CadastrarSalaComponent,
    CadastroMaterialComponent,
    CadastroTurmaComponent,
    EditarProfessorComponent,
    PerfilUserComponent,
    ListaSalasComponent,
    EditarSalaComponent,
    ListaTurmasComponent,
    RecuperarSenhaComponent,
    EditarMaterialComponent,
    ListaMaterialComponent,
    EditarTurmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
