import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { ResultComponent } from './result/result.component';

describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ResultComponent,
        KeywordsComponent,
        AppComponent
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have name 'expense extractor'`, () => {
    const app = fixture.componentInstance;
    expect(app.name).toEqual('expense extractor');
  });

  it(`should render name 'expense extractor'`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card.highlight-card.card-small span')?.textContent).toContain('expense extractor is running!');
  });
});
