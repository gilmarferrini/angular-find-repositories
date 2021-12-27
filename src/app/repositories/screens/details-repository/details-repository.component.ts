import { Issue } from './../../models/Issue';
import { Repository } from './../../models/Repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-details-repository',
  templateUrl: './details-repository.component.html',
  styleUrls: ['./details-repository.component.scss']
})
export class DetailsRepositoryComponent implements OnInit {

  repository: Repository = {} as Repository
  issues: Issue[] = [];
  total_count: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private repositoryService: RepositoryService
  ) { }

  ngOnInit(): void {
    this.repository = this.activatedRoute.snapshot.data['repository']
    console.log(this.repository)

    this.repositoryService
      .getIssues(this.repository.owner.login, this.repository.name)
      .subscribe(data => {
        this.total_count = data.total_count
        this.issues = data.items;
      })
  }

}
