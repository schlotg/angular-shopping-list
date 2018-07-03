import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListElementAddComponent } from './shopping-list-element-add.component';

describe('ShoppingListElementAddComponent', () => {
  let component: ShoppingListElementAddComponent;
  let fixture: ComponentFixture<ShoppingListElementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListElementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListElementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
