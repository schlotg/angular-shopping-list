import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list-element',
  template: `
  <div style="width: 100%; margin-top: 5px; margin-bottom: 5px;">
    <input type="checkbox" [checked]="item.enabled"/>
    <span style="width: 30px; display: inline-block">{{item.quantity}}</span>
    <span style="width: 100px; display: inline-block">{{item.name}}</span>
    <span style="width: 300px; display: inline-block">{{item.description}}</span>
    <button (click)="delete(item._id)" style="padding: 1px">Delete</button>
    <button (click)="edit(item._id)" style="padding: 1px; margin-left: 5px">Edit</button>
  </div>
  `,
})
export class ShoppingListElementComponent implements OnInit {
  @Input() item: any;

  constructor(private listService: ListServiceService, private router: Router) { }

  ngOnInit() {
  }

  delete(id: string) {
    this.listService.removeItem(id);
    location.href = 'home';
  }

  edit(id: string){
    this.router.navigate(['/edit', { id }]);
    //location.href = `edit/${id}`;
  }

}
