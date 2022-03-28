import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Toutes les routes de votre application doivent dériver de app
const routes: Routes = [
  {
    path: 'app',
    loadChildren: async () => (await import('./home/home.module')).HomeModule
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
