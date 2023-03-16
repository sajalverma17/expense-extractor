import { Component } from '@angular/core';
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

  name = this.appName
  resultText = this.defaultResultText

  extract() {

    if(this.keywords.length == 0) {
      alert('Please choose atleast one keyword to extract expenses on.')
      return
    }

    const keysString = this.keywords.map(k => k.id).join(', ').trim()
    this.resultText = this.extractionOngoingText
    alert(`Done extracting for keywords ${keysString}`)
    this.resultText = this.extractionFinishedText + keysString

  }

  updateKeywords(keywords: Keyword[]) {
    this.keywords = keywords
  }
}
