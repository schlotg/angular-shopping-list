import { Component, OnInit } from '@angular/core';
import { Item } from '../list-service.service';
import { IdServiceService } from '../id-service.service';
import { ListServiceService } from '../list-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shopping-list-element-add',
  //template: '<div>Add Works</div>'
  template: `
    <h3>{{title}}</h3>
    <table>
      <tr>
        <th>Quantity</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><input type="number" [(ngModel)]="item.quantity" style="width: 60px" /></td>
        <td><input type="text" [(ngModel)]="item.name" style="width: 100px" /></td>
        <td><input type="text" [(ngModel)]="item.description" style="width: 300px" /></td>
      </tr>
    </table>
    <button (click)="save()">Save</button>
    <button (click)="back()" style="margin-left: 5px;">Back</button>
  `,
})
export class ShoppingListElementAddComponent implements OnInit {
  item: Item;
  id: string;
  title: string;

  constructor(private idService: IdServiceService,
    private listService: ListServiceService,
    private route: ActivatedRoute) {
    const id = this.route.snapshot.params.id;
    this.id = id;
    this.item = (id) ? this.listService.getItem(this.id) : {
      _id: idService.generateId(),
      name:'',
      quantity: 0,
      description: '',
      enabled: false
    };
    this.title = (id) ? 'Edit' : 'Add';
  }

  ngOnInit() {
  }

  save() {
    if (this.id) {
      this.listService.save();
    } else {
      this.listService.addItem(this.item);
    }
    location.href = 'home';
  }

  back() {
    location.href = 'home';
  }


}
