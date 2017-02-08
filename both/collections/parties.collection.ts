/**
 * Created by mac on 2/8/17.
 */
import { MongoObservable } from "meteor-rxjs";

import { Party } from '../models/party.model';
export const Parties = new MongoObservable.Collection<Party>('parties');