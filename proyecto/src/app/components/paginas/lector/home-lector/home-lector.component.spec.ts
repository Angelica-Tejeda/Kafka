import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLectorComponent } from './home-lector.component';

describe('HomeLectorComponent', () => {
  let component: HomeLectorComponent;
  let fixture: ComponentFixture<HomeLectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
