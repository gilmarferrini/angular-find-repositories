import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"
import { RepositoryService } from './services/repository.service';
import { ListStatusComponent } from './components/list-status/list-status.component';
import { ListRepositoriesComponent } from './pages/list-repositories/list-repositories.component';

@NgModule({
  declarations: [
    ListStatusComponent,
    ListRepositoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class RepositoriesModule { }
