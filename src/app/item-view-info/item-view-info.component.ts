import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-view-info',
  templateUrl: './item-view-info.component.html',
  styleUrls: ['./item-view-info.component.scss']
})
export class ItemViewInfoComponent {

  @Input()
  itemName: string;
  @Input()
  itemSrc: string;
  @Input()
  itemType: string;
  @Input()
  itemId: number;
  @Input()
  itemKey: string;

  @Output()
  eventClickButtonChest = new EventEmitter<string>();

  onClickChest($event){
    this.eventClickButtonChest.emit($event);
  }

}
