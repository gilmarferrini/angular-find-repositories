import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private readonly baseURL = 'https://api.github.com'

  constructor(
    private httpClient: HttpClient
  ) { }

  getRepositories(repositoryName: string, page = 1) {
    return this
      .httpClient
      .get(`${this.baseURL}/search/repositories?q=${repositoryName}&per_page=7&page=${page}`)
  }
}
