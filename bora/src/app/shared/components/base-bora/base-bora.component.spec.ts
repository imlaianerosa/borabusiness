import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBoraComponent } from './base-bora.component';

describe('BaseBoraComponent', () => {
  let component: BaseBoraComponent;
  let fixture: ComponentFixture<BaseBoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseBoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseBoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
