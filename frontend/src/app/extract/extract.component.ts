import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent {
  @Output() onExtractClick = new EventEmitter()
  @Output() onStartDateChange: EventEmitter<Date> = new EventEmitter()
  @Output() onEndDateChange: EventEmitter<Date> = new EventEmitter()

  startDate: Date = new Date()
  endDate: Date = new Date()

  constructor() {
    this.startDate.setMonth(this.startDate.getMonth() - 1)
    this.endDate.setDate(this.endDate.getDate() - 1)
  }

  extractClicked() {
    this.onStartDateChange.emit(this.startDate)
    this.onEndDateChange.emit(this.endDate)
    this.onExtractClick.emit()
  }

}
