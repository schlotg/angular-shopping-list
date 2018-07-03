import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="text-align: center">{{title}}</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'Angular Shopping List';
}
