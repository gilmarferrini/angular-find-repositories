import { RepositoryHttpResponse } from './../../models/RepositoryHttpResponse';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RepositoryService } from 'src/app/repositories/services/repository.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() repositoryHttpResponseEmitter: EventEmitter<RepositoryHttpResponse> = new EventEmitter()

  repositoryName: string = ''

  constructor(
    private repositoryService: RepositoryService
  ) { }

  ngOnInit(): void {
  }

  handleSearchRepositories() {
    this.repositoryService.findRepositoriesByName(this.repositoryName)
      .subscribe(data => {
        this.repositoryHttpResponseEmitter.emit(data)
        console.log(data)
      })
  }

}
