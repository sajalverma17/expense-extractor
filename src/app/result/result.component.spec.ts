import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render default result', () => {
    const template = fixture.nativeElement as HTMLElement
    expect(template.querySelector('.terminal pre')?.textContent).toBe('Click the Extract button to get your expenses')
  })

  it('should render given result', () => {
    fixture.componentInstance.result = 'some text'
    fixture.detectChanges();
    const template = fixture.nativeElement as HTMLElement
    expect(template.querySelector('.terminal pre')?.textContent).toBe('some text')
  })
});
