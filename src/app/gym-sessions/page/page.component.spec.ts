import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymSessionsPageComponent } from './page.component';

describe('PageComponent', () => {
  let component: GymSessionsPageComponent;
  let fixture: ComponentFixture<GymSessionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymSessionsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymSessionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
