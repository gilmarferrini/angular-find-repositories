import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRepositoryComponent } from './repositories/screens/details-repository/details-repository.component';
import { ListRepositoriesComponent } from './repositories/screens/list-repositories/list-repositories.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListRepositoriesComponent },
  { path: "home/details/:ownerName/:repositoryName", component: DetailsRepositoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
