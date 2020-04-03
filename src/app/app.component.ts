import { Component} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-project';


  objectItems = {
  itemList : [
    new ItemChest('chest', ' skrzynia infernus', 'assets/sample-chest.png', 0),
    new ItemChest('chest', ' skrzynia infernus1', 'assets/sample-chest.png', 1),
    new ItemChest('chest', ' skrzynia infernus2', 'assets/sample-chest.png', 2),
    new ItemChest('chest', ' skrzynia infernus3', 'assets/sample-chest.png', 3),
    new ItemChest('chest', ' skrzynia infernus4', 'assets/sample-chest.png', 4),
  ],
  prizeList: [
    new ItemPrize('prize', 'Steam-key1', 'assets/sample-reward.png', 235, 0, '46G7-GS36-8R35'),
    new ItemPrize('prize', 'Steam-key2', 'assets/sample-reward.png', 50, 1, 'ED24-5B24-6433'),
    new ItemPrize('prize', 'Steam-key3', 'assets/sample-reward.png', 34, 2, '56B2-7435-DYE4'),
    new ItemPrize('prize', 'Steam-key4', 'assets/sample-reward.png', 87, 3, '6CH5-36J3-268K'),
    new ItemPrize('prize', 'Steam-key5', 'assets/sample-reward.png', 35, 4, '7EG2-46B5-GH66'),
    new ItemPrize('prize', 'Steam-key6', 'assets/sample-reward.png', 265, 5, '3F68-9643-2T7D')
  ]
  };

  name: string;
  src: string;
  type: string;
  id: number;
  key: string;
  prize: ItemPrize;

  deleteItem(id){
    // this.objectItems.itemList.splice(id, 1);
    console.log(this.objectItems.itemList);
  }
  generatePrizes(){
    this.prize = this.objectItems.prizeList[Math.floor(Math.random() * this.objectItems.prizeList.length)];
    this.objectItems.prizeList.push(this.prize);
    this.selected(this.prize);
  }

  selected($event){
    this.name = $event.name;
    this.src = $event.srcImage;
    this.type = $event.type;
    this.id = $event.id;
    this.key = $event.key;
  }

  addPrizes(idItem){
    this.findAndDeleteById(this.objectItems.itemList, idItem);
    this.deleteItem(idItem);
    this.generatePrizes();
  }
  findAndDeleteById(arrayOfItems, id) {
    arrayOfItems.forEach(element => {
      const elementPosition = arrayOfItems.indexOf(element);
      if (element.id === id) {
        this.objectItems.itemList.splice(elementPosition, 1);
        return;
      }
    });
  }

}

class ItemChest {
  constructor(public type: string, public name: string, public srcImage: string, public id: number ){
  }
}
class ItemPrize {
    constructor(
      public type: string, public name: string, public srcImage: string, public value: number, public id: number, public key: string
      ){
    }

}
