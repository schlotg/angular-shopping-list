import { Injectable } from '@angular/core';
import { IdServiceService } from './id-service.service';


export interface Item {
  name: string;
  description: string;
  quantity: number;
  enabled: boolean;
  _id?: string;
}


@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private list: Item[] = [];

  constructor(private idService: IdServiceService) {
    if (window.localStorage) {
      const json = window.localStorage.getItem('AngularShoppingList');
      if (json) {
        const list = JSON.parse(json) || [];
        list.forEach((e: Item) => this.addItem(e));
      }
    }
  }
  addItem(item: Item) {
    item._id = item._id || this.idService.generateId();
    this.list.push(item);
    //this.notifier.notify();
    this.save();
  }

  removeItem(id: string) {
    const i = this.list.findIndex((e) => e._id === id);
    this.list.splice(i, 1);
    //this.notifier.notify();
    this.save();
  }

  getItem(id: string): Item {
    const i = this.list.findIndex((e) => e._id === id);
    return this.list[i];
  }

  forEach(cb: (item: Item, i?: number) => void) {
    this.list.forEach(cb);
  }

  onChange() {
    //this.notifier.notify();
    this.save();
  }
/*
  addListener (cb: Listener): string {
    return this.notifier.push(cb);
  }

  removeListener(id: string) {
    this.notifier.remove(id);
  }
*/
  save() {
    if (window.localStorage) {
      window.localStorage.setItem('AngularShoppingList',
        JSON.stringify(this.list));
    }
  }

  clear() {
    this.list = [];
    this.onChange();
  }
}
