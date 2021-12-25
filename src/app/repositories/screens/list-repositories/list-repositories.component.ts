import { RepositoryStatusData } from './../../models/RepositoryStatusData';
import { RepositoryHttpResponse } from './../../models/RepositoryHttpResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.scss']
})
export class ListRepositoriesComponent implements OnInit {

  repositoriesStatusData: RepositoryStatusData = {} as RepositoryStatusData

  constructor() { }

  ngOnInit(): void {
  }

  getRepositoriesStatusFromEmitter($event: RepositoryHttpResponse) {
    this.repositoriesStatusData = {
      total_count: $event.total_count
    }
  }

}
