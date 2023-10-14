import { Component, Inject } from '@angular/core';
import { Keyword } from './keywords/keywords.component';
import { getExpenses } from './expense/extractor';
import { APP_NAME } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private appName = APP_NAME
  private extractionOngoingText = 'Extracting total expenses...'
  private defaultResultText = 'Click the Extract button to get your expenses'

  private keywords: Keyword[] = []
  private customKeyword: Keyword = { id: "" }
  private startDate: Date = new Date("2000-01-01")
  private endDate: Date = new Date("2000-01-01")

  name = this.appName
  resultText = this.defaultResultText

  async extract() : Promise<void> {

    if(this.keywords.length == 0 && this.customKeyword.id == "" ) {
      alert('Please choose atleast one keyword or custom keyword to extract expenses on.')
      return
    }

    if(this.startDate > this.endDate) {
      alert('End date must be later than start date.')
      return
    }

    if(this.endDate >= new Date()) {
      alert('End date can not be today or in future.')
      return
    }

    this.resultText = this.extractionOngoingText
    const keywordToExtract = this.customKeyword.id != "" ? this.customKeyword.id : this.keywords[0].id
    const expense = await getExpenses(keywordToExtract, this.startDate, this.endDate)
    this.resultText = `You spent ${expense} on ${keywordToExtract}`

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

  setCustomKeyword(customKeyword: Keyword) {
    this.customKeyword = customKeyword
  }
}
