/**
 * Created by mac on 2/8/17.
 */

import { CollectionObject } from './collection-object.model';

export interface Party extends CollectionObject {
    name: string;
    description: string;
    location: string;
}