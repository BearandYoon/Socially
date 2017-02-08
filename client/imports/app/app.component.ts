import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent {
  parties: any[];

  constructor() {
    this.parties = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to debstep.',
        'location': 'Palo Alto'
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!',
        'location': 'Palo Alto'
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.',
        'location': 'San Francisco'
      },
    ];
  }
}
