import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-eq-view-items-box',
  templateUrl: './eq-view-items-box.component.html',
  styleUrls: ['./eq-view-items-box.component.scss'],
})
export class EqViewItemsBoxComponent{
  @Input()
  ChestList;

  @Input()
  PrizeList;

  @Output()
  eventClickItem = new EventEmitter<string>();
  getTotalAmount() {
    if (this.PrizeList) {
        return this.PrizeList.map(t => t.value).reduce((a, b) => a + b, 0);
    }
    return 0;
  }

  onClick(item){
    this.eventClickItem.emit(item);
  }
}

