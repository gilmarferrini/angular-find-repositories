import { GetRepositoryDetailsResolver } from './resolvers/get-repository-details.resolver';
import { DetailsRepositoryComponent } from './screens/details-repository/details-repository.component';
import { ListRepositoriesComponent } from './screens/list-repositories/list-repositories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListRepositoriesComponent
  },
  {
    path: 'details/:ownerName/:repositoryName',
    component: DetailsRepositoryComponent,
    resolve: {
      repository: GetRepositoryDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
