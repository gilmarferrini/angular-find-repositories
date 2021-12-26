import { Repository } from './../../models/Repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-repository',
  templateUrl: './details-repository.component.html',
  styleUrls: ['./details-repository.component.scss']
})
export class DetailsRepositoryComponent implements OnInit {

  repository: Repository = {} as Repository

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.repository = this.activatedRoute.snapshot.data['repository']
    console.log(this.repository)
  }

}
