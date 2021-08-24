import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmarMenuComponent } from './armar-menu.component';

describe('ArmarMenuComponent', () => {
  let component: ArmarMenuComponent;
  let fixture: ComponentFixture<ArmarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
