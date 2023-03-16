import { Component, EventEmitter, Output } from '@angular/core';

export interface Keyword {
  id: string
}

interface KeywordWithClass extends Keyword {
  AddClass: string
  AddedClass: string
}

@Component({
  selector: 'keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent {

  private selectedKeywords: Keyword[] = []
  @Output() onKeywordsChange: EventEmitter<Keyword[]> = new EventEmitter()

  keywords = [
    {id: "kiwi", keyword:"Kiwi", AddClass: 'visible', AddedClass: 'invisible' },
    {id: "freshfitness", keyword: "Fresh Fitness", AddClass: 'visible', AddedClass: 'invisible' },
    {id: "netflix", keyword:"Netflix", AddClass: 'visible', AddedClass: 'invisible' },
  ]

  toggle(keywordWithClass: KeywordWithClass) {

    if (keywordWithClass.AddClass === 'visible') {
      this.add(keywordWithClass as Keyword)
      this.displayAdded(keywordWithClass)
      this.onKeywordsChange.emit(this.selectedKeywords)
      return
    }

    this.remove(keywordWithClass.id)
    this.displayAdd(keywordWithClass)
    this.onKeywordsChange.emit(this.selectedKeywords)
    return
  }

  get(): Keyword[] {
    return this.selectedKeywords
  }

  private displayAdded(keywordWithClass: KeywordWithClass) {
    keywordWithClass.AddClass = 'invisible'
    keywordWithClass.AddedClass = 'visible'
  }

  private displayAdd(keywordWithClass: KeywordWithClass) {
    keywordWithClass.AddClass = 'visible'
    keywordWithClass.AddedClass = 'invisible'
  }

  private add(keyword: Keyword) {
    this.selectedKeywords.push(keyword)
  }

  private remove(idToRemove: string) {
    const indexToRemove = this.selectedKeywords.findIndex(k => {
      return k.id === idToRemove
    })

    if(indexToRemove !== -1) {
      this.selectedKeywords.splice(indexToRemove, 1)
    }
  }
}
