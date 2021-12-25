import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRepositoryComponent } from './details-repository.component';

describe('DetailsRepositoryComponent', () => {
  let component: DetailsRepositoryComponent;
  let fixture: ComponentFixture<DetailsRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
