import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubappComponent } from './githubapp.component';

describe('GithubappComponent', () => {
  let component: GithubappComponent;
  let fixture: ComponentFixture<GithubappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
