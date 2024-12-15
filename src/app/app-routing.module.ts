import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { CadastrarSalaComponent } from './cadastrar-sala/cadastrar-sala.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';
import { EditarSalaComponent } from './editar-sala/editar-sala.component';
import { ListaSalasComponent } from './lista-salas/lista-salas.component';
import { ListaTurmasComponent } from './lista-turmas/lista-turmas.component';
import { CadastroTurmaComponent } from './cadastro-turma/cadastro-turma.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { EditarMaterialComponent } from './editar-material/editar-material.component';
import { ListaMaterialComponent } from './lista-material/lista-material.component';
import { CadastroMaterialComponent } from './cadastro-material/cadastro-material.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { CadastroAdmComponent } from './cadastro-adm/cadastro-adm.component';

const routes: Routes = [
  {
    path: '',
    component: TelaDeLoginComponent
  },
  {
    path: 'cadastro-professor',
    component: CadastroProfessorComponent
  },
  {
    path: 'lista-professor',
    component: ListaProfessoresComponent
  },
  {
    path: 'editar-professor',
    component: EditarProfessorComponent
  },
  {
    path:'gerenciar',
    component: GerenciarComponent
  },
  {
    path: 'edit-sala',
    component: EditarSalaComponent
  },
  {
  path: 'list-salas',
  component: ListaSalasComponent
  },
  {
    path: 'lista-turmas',
    component: ListaTurmasComponent
  },
  {
    path: 'cadastro-turma',
    component: CadastroTurmaComponent
  },
  {
    path: 'recuperar-senha',
    component: RecuperarSenhaComponent
  },
  {
    path: 'editar-material',
    component: EditarMaterialComponent
  },
  {
    path: 'lista-material',
    component: ListaMaterialComponent
  },
  {
    path: 'cadastrar-material',
    component: CadastroMaterialComponent
  },
  {
    path: 'editar-turma',
    component: EditarTurmaComponent
  },
  {
    path:'cadastro-sala',
    component: CadastrarSalaComponent
  },
  {
    path: 'perfil',
    component: PerfilUserComponent
  },
  {
    path: 'cad-adm',
    component: CadastroAdmComponent
  }

  

  

  


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
