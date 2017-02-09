import { NgModule }               from "@angular/core";
import { BrowserModule }          from "@angular/platform-browser";
import { FormsModule,
    ReactiveFormsModule }         from '@angular/forms';
import { RouterModule }           from '@angular/router';

import { AppComponent }           from "./app.component";
import { routes }                 from './app.routes';
import { DemoDataService }        from "./demo/demo-data.service";
import { PARTIES_DECLARATIONS }   from './parties';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    ...PARTIES_DECLARATIONS
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    DemoDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
