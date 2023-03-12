import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent {
  @Output() onExtractClick = new EventEmitter()

  extractClicked() {
    this.onExtractClick.emit()
  }
}
