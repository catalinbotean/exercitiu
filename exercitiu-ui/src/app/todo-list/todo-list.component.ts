import { Component, Input} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() public itemList = [];
  // @Output() public deleteItem = new EventEmitter<number>();

  constructor() { }

  // public onClickDelete(itemId: number): void {
  //   this.deleteItem.emit(itemId); // emitem un eveniment care contine id-ul itemului ce il vom sterge
  // }

}
