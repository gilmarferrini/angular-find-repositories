import { GetRepositoryDetailsResolver } from './repositories/resolvers/get-repository-details.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRepositoryComponent } from './repositories/screens/details-repository/details-repository.component';
import { ListRepositoriesComponent } from './repositories/screens/list-repositories/list-repositories.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./repositories/repositories.module').then((module) => module.RepositoriesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
