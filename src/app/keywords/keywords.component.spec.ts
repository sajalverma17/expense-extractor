import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsComponent } from './keywords.component';
import { count } from 'rxjs';

describe('KeywordsComponent', () => {
  let component: KeywordsComponent;
  let fixture: ComponentFixture<KeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add and remove keyword', () => {
    const fixture = TestBed.createComponent(KeywordsComponent);
    fixture.componentInstance.toggle({ id: "kiwi", AddClass: "visible", AddedClass: "invisible" })
    expect(fixture.componentInstance.get()).toHaveSize(1)
  })
});
