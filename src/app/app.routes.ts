import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

const FuncionarioListComponent: any = {};
const FuncionarioFormComponent: any = {};
const DepartamentoListComponent: any = {};
const DepartamentoFormComponent: any = {};


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: 'departamentos',
    canActivate: [authGuard],
    children: [
      { path: '', component: DepartamentoListComponent },
      { path: 'novo', component: DepartamentoFormComponent, canDeactivate: [unsavedChangesGuard] },
      { path: ':id', component: DepartamentoFormComponent, canDeactivate: [unsavedChangesGuard] },
    ]
  },

  {
    path: 'funcionarios',
    canActivate: [authGuard],
    children: [
      { path: '', component: FuncionarioListComponent },
      { path: 'novo', component: FuncionarioFormComponent, canDeactivate: [unsavedChangesGuard] },
      { path: ':id', component: FuncionarioFormComponent, canDeactivate: [unsavedChangesGuard] },
    ]
  },

  { path: '**', redirectTo: 'login' }
];