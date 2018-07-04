import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListElementAddComponent } from './shopping-list-element-add/shopping-list-element-add.component';
import { ShoppingListElementComponent } from './shopping-list-element/shopping-list-element.component';
import { FormsModule } from '@angular/forms';
import { createRouter, Component } from 'viage';

class Test extends Component {
  constructor() {
    super('Test');
    this.setHTML('');
  }
}

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add', component: ShoppingListElementAddComponent },
  { path: 'edit', component: ShoppingListElementAddComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingListElementAddComponent,
    ShoppingListElementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
