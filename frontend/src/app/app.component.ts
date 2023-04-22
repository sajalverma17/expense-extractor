import { Component, Inject } from '@angular/core';
import { Keyword } from './keywords/keywords.component';
import { getExpenses } from './expense/extractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* TODO: Move to a constants file */
  private appName = 'expense extractor'
  private extractionOngoingText = 'Extracting total expenses...'
  private defaultResultText = 'Click the Extract button to get your expenses'

  private keywords: Keyword[] = []
  private startDate: Date = new Date("2000-01-01")
  private endDate: Date = new Date("2000-01-01")

  name = this.appName
  resultText = this.defaultResultText

  async extract() : Promise<void> {

    if(this.keywords.length == 0) {
      alert('Please choose atleast one keyword to extract expenses on.')
      return
    }

    if(this.startDate > this.endDate) {
      alert('End date must be later than start date.')
      return
    }

    const keysString = this.keywords.map(k => k.id).join('&').trim()
    alert(`Extracting for keywords ${keysString}. Start Date: ${this.startDate} End Date: ${this.endDate}`)

    this.resultText = this.extractionOngoingText
    const expense = await getExpenses(this.keywords[0].id, this.startDate, this.endDate)
    this.resultText = `You spent ${expense} on ${this.keywords[0].id}`

    return Promise.resolve()
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
