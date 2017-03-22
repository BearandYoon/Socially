/**
 * Created by mac on 3/22/17.
 */
import { Meteor } from 'meteor/meteor';

import { Parties } from '../../../both/collections/parties.collection';

Meteor.publish('uninvited', function (partyId: string) {
    const party = Parties.findOne(partyId);

    if (!party) {
        throw new Meteor.Error('404', 'No such party!');
    }

    return Meteor.users.find({
        _id: {
            $nin: party.invited || [],
            $ne: this.userId
        }
    });
});