/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PruneComponent } from './prune.component';

describe('PruneComponent', () => {
  let component: PruneComponent;
  let fixture: ComponentFixture<PruneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
