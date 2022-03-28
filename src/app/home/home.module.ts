import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FindAllComponent } from './pages/find-all/find-all.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from '../api/api.module';


@NgModule({
  declarations: [
    FindAllComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ApiModule
  ]
})
export class HomeModule { }
