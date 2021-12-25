import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"
import { ListStatusComponent } from './components/list-status/list-status.component';
import { ListRepositoriesComponent } from './screens/list-repositories/list-repositories.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ListStatusComponent,
    ListRepositoriesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class RepositoriesModule { }
