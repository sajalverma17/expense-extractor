import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsComponent } from './keywords.component';

describe('KeywordsComponent', () => {
  let fixture: ComponentFixture<KeywordsComponent>;
  const testKeyword1 = { id: "bob-lawbla", AddClass: "visible", AddedClass: "invisible" }
  const testKeyword2 = { id: "mr.f", AddClass: "visible", AddedClass: "invisible" }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordsComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance.get()).toHaveSize(0)
  });

  it('toggle should add keywords', () => {

    spyOn(fixture.componentInstance.onKeywordsChange, 'emit')
    fixture.detectChanges()

    fixture.componentInstance.toggle(testKeyword1)
    expect(fixture.componentInstance.onKeywordsChange.emit).toHaveBeenCalledOnceWith( [ testKeyword1 ])

    fixture.componentInstance.toggle(testKeyword2)
    expect(fixture.componentInstance.onKeywordsChange.emit).toHaveBeenCalledWith([ testKeyword1, testKeyword2 ])
  })

  it('toggle should remove keywords', () => {

    spyOn(fixture.componentInstance.onKeywordsChange, 'emit')
    fixture.detectChanges()

    fixture.componentInstance.toggle(testKeyword1)
    expect(fixture.componentInstance.onKeywordsChange.emit).toHaveBeenCalledOnceWith([ testKeyword1 ])

    fixture.componentInstance.toggle(testKeyword1)
    expect(fixture.componentInstance.onKeywordsChange.emit).toHaveBeenCalledWith([])
  })

});
