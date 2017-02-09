/**
 * Created by mac on 2/9/17.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

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
    partySub: Subscription;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.paramsSub = this.route.params
            .map(params => params['partyId'])
            .subscribe(partyId => {
                this.partyId = partyId;

                if (this.partySub) {
                    this.partySub.unsubscribe();
                }

                this.partySub = MeteorObservable.subscribe('party', this.partyId).subscribe(() => {
                    this.party = Parties.findOne(this.partyId);
                });
            });
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
        this.partySub.unsubscribe();
    }

    saveParty() {
        if (!Meteor.userId()) {
            alert('Please log in to add a party');
            return;
        }

        Parties.update(this.party._id, {
            $set: {
                name: this.party.name,
                description: this.party.description,
                location: this.party.location
            }
        });
    }
}