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

  extractClicked() {
    this.onExtractClick.emit()
  }

  startDateChanged() {
    this.onStartDateChange.emit(this.startDate)
  }

  endDateChanged() {
    this.onEndDateChange.emit(this.endDate)
  }
}
