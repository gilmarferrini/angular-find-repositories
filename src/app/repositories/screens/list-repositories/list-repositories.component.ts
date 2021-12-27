import { RepositoryStatusData } from './../../models/RepositoryStatusData';
import { RepositoryHttpResponse } from './../../models/RepositoryHttpResponse';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../../models/Repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.scss']
})
export class ListRepositoriesComponent implements OnInit {

  repositoriesStatusData: RepositoryStatusData = {} as RepositoryStatusData
  repositories: Repository[] = []

  hasSearched: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.hasSearched = false;
  }

  getRepositoriesStatusFromEmitter($event: RepositoryHttpResponse) {
    this.repositoriesStatusData = {
      total_count: $event.total_count
    }

    this.repositories = $event.items;

    this.hasSearched = true
  }

  changeToDetailsPage(ownerName: string, repositoryName: string) {
    this.router.navigateByUrl(`/home/details/${ownerName}/${repositoryName}`);
  }
}
