import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsComponent } from './keywords.component';

describe('KeywordsComponent', () => {
  let fixture: ComponentFixture<KeywordsComponent>;

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
    fixture.componentInstance.toggle({ id: "bob-lawbla", AddClass: "visible", AddedClass: "invisible" })
    expect(fixture.componentInstance.get()).toHaveSize(1)

    fixture.componentInstance.toggle({ id: "mr.f", AddClass: "visible", AddedClass: "invisible" })
    expect(fixture.componentInstance.get()).toHaveSize(2)
  })

  it('toggle should remove keywords', () => {
    expect(fixture.componentInstance.get()).toHaveSize(0)

    fixture.componentInstance.toggle({ id: "tobais", AddClass: "visible", AddedClass: "invisible" })
    expect(fixture.componentInstance.get()).toHaveSize(1)

    fixture.componentInstance.toggle({ id: "tobais", AddClass: "invisible", AddedClass: "visible" })
    expect(fixture.componentInstance.get()).toHaveSize(0)
  })

});
