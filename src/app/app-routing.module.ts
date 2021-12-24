import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRepositoriesComponent } from './repositories/pages/list-repositories/list-repositories.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListRepositoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
