import { Component } from '@angular/core';

interface Keyword {
  id: string
}

@Component({
  selector: 'keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent {

  keywords = [
    {id: "kiwi", keyword:"Kiwi" },
    {id: "freshfitness", keyword: "Fresh Fitness"},
    {id: "netflix", keyword:"Netflix"},
    {id: "lingu", keyword:"Lingu"},
  ];

  selected = [];

  get(): Keyword[] {
    return []
  }
}
