/**
 * Created by mac on 3/22/17.
 */
import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

export const Users = MongoObservable.fromExisting(Meteor.users);