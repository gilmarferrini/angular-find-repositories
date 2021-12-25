import { RepositoryStatusData } from './../../models/RepositoryStatusData';
import { RepositoryHttpResponse } from './../../models/RepositoryHttpResponse';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../../models/Repository';

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.scss']
})
export class ListRepositoriesComponent implements OnInit {

  repositoriesStatusData: RepositoryStatusData = {} as RepositoryStatusData
  repositories: Repository[] = []

  constructor() { }

  ngOnInit(): void {
  }

  getRepositoriesStatusFromEmitter($event: RepositoryHttpResponse) {
    this.repositoriesStatusData = {
      total_count: $event.total_count
    }

    this.repositories = $event.items;
  }

}
