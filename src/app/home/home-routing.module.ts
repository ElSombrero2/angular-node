import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllComponent } from './pages/find-all/find-all.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'all',
    component: FindAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
