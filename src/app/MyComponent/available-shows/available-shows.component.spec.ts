import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableShowsComponent } from './available-shows.component';

describe('AvailableShowsComponent', () => {
  let component: AvailableShowsComponent;
  let fixture: ComponentFixture<AvailableShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
