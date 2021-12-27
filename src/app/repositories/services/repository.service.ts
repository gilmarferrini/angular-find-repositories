import { IssueHttpResponse } from './../models/IssueHttpResponse';
import { CommitHttpResponse } from './../models/CommitHttpResponse';
import { RepositoryHttpResponse } from './../models/RepositoryHttpResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private readonly baseURL = 'https://api.github.com'
  currentRepository: string = ''

  constructor(
    private httpClient: HttpClient
  ) { }

  findRepositoriesByName(repositoryName: string, page = 1) {
    this.currentRepository = repositoryName
    return this
      .httpClient
      .get<RepositoryHttpResponse>(`${this.baseURL}/search/repositories?q=${repositoryName}&per_page=7&page=${page}`)
  }

  getCommitsByName(repositoryName: string) {
    return this
      .httpClient
      .get<CommitHttpResponse[]>(`${this.baseURL}/search/commits?q=${repositoryName}`)
  }

  findRepository(ownerName: string, repositoryName: string) {
    return this
      .httpClient
      .get<any>(`${this.baseURL}/repos/${ownerName}/${repositoryName}`)
  }

  getIssues(ownerName: string, repositoryName: string) {
    return this
      .httpClient
      .get<IssueHttpResponse>(`${this.baseURL}/search/issues?q=repo:${ownerName}/${repositoryName}`)
  }
}
