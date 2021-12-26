import { RepositoryHttpResponse } from './../../models/RepositoryHttpResponse';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RepositoryService } from 'src/app/repositories/services/repository.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() repositoryHttpResponseEmitter: EventEmitter<RepositoryHttpResponse> = new EventEmitter()

  repositoryName: string = ''
  amountParams: number = 0;

  constructor(
    private repositoryService: RepositoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(data => {
      this.amountParams = data.length
    })
  }

  handleSearchRepositories() {
    this.repositoryService.findRepositoriesByName(this.repositoryName)
      .subscribe(data => {
        this.repositoryHttpResponseEmitter.emit(data)
      })
  }

  changePageToHome() {
    this.router.navigateByUrl('home')
  }

}
