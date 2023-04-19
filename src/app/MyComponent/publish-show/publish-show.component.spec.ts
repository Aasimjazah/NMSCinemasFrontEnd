import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishShowComponent } from './publish-show.component';

describe('PublishShowComponent', () => {
  let component: PublishShowComponent;
  let fixture: ComponentFixture<PublishShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
