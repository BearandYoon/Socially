/**
 * Created by mac on 2/9/17.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import { Party } from '../../../../both/models/party.model';
import { Parties } from '../../../../both/collections/parties.collection';
import template from './party-details.component.html';

@Component({
    selector: 'party-details',
    template
})

export class PartyDetailsComponent implements OnInit, OnDestroy {
    partyId: string;
    paramsSub: Subscription;
    party: Party;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.paramsSub = this.route.params
            .map(params => params['partyId'])
            .subscribe(partyId => {
                this.partyId = partyId;

                this.party = Parties.findOne(this.partyId);
            });
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }

    saveParty() {
        Parties.update(this.party._id, {
            $set: {
                name: this.party.name,
                description: this.party.description,
                location: this.party.location
            }
        });
    }
}