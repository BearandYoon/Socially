import "angular2-meteor-polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./imports/app";
import '../both/methods/parties.methods';

// enableProdMode();

// Meteor.startup(() => {
//    platformBrowserDynamic().bootstrapModule(AppModule);
// });
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);