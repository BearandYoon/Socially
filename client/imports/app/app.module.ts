import { NgModule }               from "@angular/core";
import { BrowserModule }          from "@angular/platform-browser";
import { FormsModule,
    ReactiveFormsModule }         from '@angular/forms';
import { AppComponent }           from "./app.component";
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
    ReactiveFormsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
