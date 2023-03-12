import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractComponent } from './extract.component';

describe('ExtractComponent', () => {
  let fixture: ComponentFixture<ExtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
