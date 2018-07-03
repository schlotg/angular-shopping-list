import { Component, OnInit } from '@angular/core';
import { ListServiceService, Item } from '../list-service.service';

@Component({
  selector: 'app-home',
  template: `
    <button attach="add" (click)="add()" style="color: #00c700">Add</button>
    <button attach="clear" (click)="clear()"
      style="color: #ff6e6e; margin-left: 5px">
        Clear
      </button>
    <div style="margin-top: 20px; width: 630px; padding: 5px;
    background-color: #eeeeee;">
      <div *ngFor="let item of items">
        <app-shopping-list-element [item]="item"></app-shopping-list-element>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {

  items: Item[] = [];

  constructor(private listService: ListServiceService) {
    this.listService.forEach((item: Item) => {
      this.items.push(item);
    });
  }

  ngOnInit() {
  }

  add() {
    location.href = 'add';
  }

  clear() {
    this.listService.clear();
  }

}
