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
  currentPage: number = 1;
  hasIssues: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private repositoryService: RepositoryService
  ) { }

  ngOnInit(): void {
    this.repository = this.activatedRoute.snapshot.data['repository']
    console.log(this.repository)

    this.loadIssues(this.repository.owner.login, this.repository.name, 1)
  }

  loadIssues(ownerName: string, repositoryName: string, page: number) {
    this.repositoryService
      .getIssues(ownerName, repositoryName, page)
      .subscribe(data => {
        this.total_count = data.total_count
        this.issues = data.items;

        if (this.issues.length < 30) {
          this.hasIssues = false;
        } else {
          this.hasIssues = true;
        }
      })
  }

  previousPage() {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage--;

    this.loadIssues(this.repository.owner.login, this.repository.name, this.currentPage)
  }

  nextPage() {

    if (
      this.issues.length === 0 ||
      this.issues.length < 30 ||
      this.currentPage === this.getTotalPages()
    ) {
      return;
    }

    this.currentPage++;
    this.loadIssues(this.repository.owner.login, this.repository.name, this.currentPage)
  }

  getTotalPages() {
    return Math.floor(this.total_count / 30)
  }

}
