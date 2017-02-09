/**
 * Created by mac on 2/9/17.
 */
import { Route } from '@angular/router';

import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';

export const routes: Route[] = [
    { path: '', component: PartiesListComponent },
    { path: 'party/:partyId', component: PartyDetailsComponent }
];