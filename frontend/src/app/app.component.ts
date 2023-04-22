import { Component, Inject } from '@angular/core';
import { Keyword } from './keywords/keywords.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* TODO: Move to a constants file */
  private appName = 'expense extractor'
  private extractionOngoingText = 'Extracting total expenses...'
  private extractionFinishedText = 'Your spent about three fiddy on '
  private defaultResultText = 'Click the Extract button to get your expenses'

  private keywords: Keyword[] = []
  private startDate: Date = new Date("2000-01-01")
  private endDate: Date = new Date("2000-01-01")

  name = this.appName
  resultText = this.defaultResultText

  extract() {

    if(this.keywords.length == 0) {
      alert('Please choose atleast one keyword to extract expenses on.')
      return
    }

    const keysString = this.keywords.map(k => k.id).join('&').trim()
    this.resultText = this.extractionOngoingText
    alert(`Extracting for keywords ${keysString}. Start Date: ${this.startDate} End Date: ${this.endDate}`)
    this.resultText = this.extractionFinishedText + keysString
  }

  setStartDate(date: Date) {
    this.startDate = date
  }

  setEndDate(date: Date) {
    this.endDate = date
  }

  setKeywords(keywords: Keyword[]) {
    this.keywords = keywords
  }
}
