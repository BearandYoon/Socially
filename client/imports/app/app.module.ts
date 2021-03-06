import { NgModule }               from "@angular/core";
import { BrowserModule }          from "@angular/platform-browser";
import { FormsModule,
    ReactiveFormsModule }         from '@angular/forms';
import { RouterModule }           from '@angular/router';
import { AccountsModule }         from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent }           from "./app.component";
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { DemoDataService }        from "./demo/demo-data.service";
import { PARTIES_DECLARATIONS }   from './parties';
import { SHARED_DECLARATIONS } from './shared';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    ...PARTIES_DECLARATIONS,
    ...SHARED_DECLARATIONS
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    ...ROUTES_PROVIDERS
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccountsModule,
    Ng2PaginationModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
