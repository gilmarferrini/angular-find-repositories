import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RepositoryService } from '../services/repository.service';

@Injectable({
  providedIn: 'root'
})
export class GetRepositoryDetailsResolver implements Resolve<boolean> {
  constructor (
    private repositoryService: RepositoryService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const ownerName = route.params['ownerName']
    const repositoryName = route.params['repositoryName']
    return this.repositoryService.findRepository(ownerName, repositoryName);
  }
}
