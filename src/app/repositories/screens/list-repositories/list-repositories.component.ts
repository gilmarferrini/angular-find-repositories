import { RepositoryStatusData } from './../../models/RepositoryStatusData';
import { RepositoryHttpResponse } from './../../models/RepositoryHttpResponse';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../../models/Repository';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.scss']
})
export class ListRepositoriesComponent implements OnInit {

  repositoriesStatusData: RepositoryStatusData = {} as RepositoryStatusData
  repositories: Repository[] = []

  hasSearched: boolean = false;

  currentPage : number = 0;

  constructor(
    private router: Router,
    private repositoryService: RepositoryService
  ) { }

  ngOnInit(): void {
    this.hasSearched = false;
  }

  getRepositoriesStatusFromEmitter($event: RepositoryHttpResponse) {
    if (this.currentPage === 0) {
      this.currentPage = 1;
    }

    this.repositoriesStatusData = {
      total_count: $event.total_count
    }

    this.repositories = $event.items.map(item => {
      return {
        ...item,
        updated_at: new Date(item.updated_at).toDateString()
      }
    })

    this.hasSearched = true
  }

  changeToDetailsPage(ownerName: string, repositoryName: string) {
    this.router.navigateByUrl(`/home/details/${ownerName}/${repositoryName}`);
  }

  loadRepositories() {
    const repositoryName = this.repositoryService.currentRepository

    this.repositoryService
      .findRepositoriesByName(repositoryName, this.currentPage)
      .subscribe(data => {
        this.repositories = data.items.map(item => {
          return {
            ...item,
            updated_at: new Date(item.updated_at).toDateString()
          }
        })
      })
  }

  nextPage() {
    this.currentPage++;

    this.loadRepositories()
  }

  previousPage() {
    if (this.currentPage === 1) {
      return
    }

    this.currentPage--;

    this.loadRepositories()
  }
}
