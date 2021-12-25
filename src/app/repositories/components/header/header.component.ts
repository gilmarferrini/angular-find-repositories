import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/repositories/services/repository.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  repositoryName: string = ''

  constructor(
    private repositoryService: RepositoryService
  ) { }

  ngOnInit(): void {
  }

  handleSearchRepositories() {
    this.repositoryService.getRepositories(this.repositoryName)
      .subscribe((repositories) => {
        console.log(repositories)
      })
  }

}
