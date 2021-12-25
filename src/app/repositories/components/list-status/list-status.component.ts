import { RepositoryStatusData } from './../../models/RepositoryStatusData';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.scss']
})
export class ListStatusComponent implements OnInit {

  @Input() repositoriesStatusData: RepositoryStatusData = {} as RepositoryStatusData

  constructor() {

  }

  ngOnInit(): void {
    this.repositoriesStatusData = {
      total_count: 0
    }
  }

}
