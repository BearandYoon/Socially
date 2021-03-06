/**
 * Created by mac on 2/9/17.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Party } from '../../../../both/models/party.model';
import { Parties } from '../../../../both/collections/parties.collection';
import { Users } from '../../../../both/collections/users.collection';
import { User } from '../../../../both/models/user.model';
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
    users: Observable<User>;
    uninvitedSub: Subscription;

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
                    MeteorObservable.autorun().subscribe(() => {
                        this.party = Parties.findOne(this.partyId);
                        this.getUsers(this.party);
                    });
                });

                if (this.uninvitedSub) {
                    this.uninvitedSub.unsubscribe();
                }

                this.uninvitedSub = MeteorObservable.subscribe('uninvited', this.partyId).subscribe(() => {
                    this.getUsers(this.party);
                });
            });
    }

    invite(user: Meteor.User) {
        MeteorObservable.call('invite', this.party._id, user._id).subscribe(() => {
            alert('User successfully invited.');
        }, (error) => {
            alert(`Failed to invite due to ${error}`);
        });
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
        this.partySub.unsubscribe();
        this.uninvitedSub.unsubscribe();
    }

    getUsers(party: Party) {
        if (party) {
            this.users = Users.find({
                _id: {
                    $nin: party.invited || [],
                    $ne: Meteor.userId()
                }
            }).zone();
        }
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