/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Cooldown } from './Cooldown';
import {
    CooldownFromJSON,
    CooldownFromJSONTyped,
    CooldownToJSON,
} from './Cooldown';
import type { ShipCargo } from './ShipCargo';
import {
    ShipCargoFromJSON,
    ShipCargoFromJSONTyped,
    ShipCargoToJSON,
} from './ShipCargo';
import type { ShipRefine201ResponseDataProducedInner } from './ShipRefine201ResponseDataProducedInner';
import {
    ShipRefine201ResponseDataProducedInnerFromJSON,
    ShipRefine201ResponseDataProducedInnerFromJSONTyped,
    ShipRefine201ResponseDataProducedInnerToJSON,
} from './ShipRefine201ResponseDataProducedInner';

/**
 * 
 * @export
 * @interface ShipRefine201ResponseData
 */
export interface ShipRefine201ResponseData {
    /**
     * 
     * @type {ShipCargo}
     * @memberof ShipRefine201ResponseData
     */
    cargo: ShipCargo;
    /**
     * 
     * @type {Cooldown}
     * @memberof ShipRefine201ResponseData
     */
    cooldown: Cooldown;
    /**
     * Goods that were produced by this refining process.
     * @type {Array<ShipRefine201ResponseDataProducedInner>}
     * @memberof ShipRefine201ResponseData
     */
    produced: Array<ShipRefine201ResponseDataProducedInner>;
    /**
     * Goods that were consumed during this refining process.
     * @type {Array<ShipRefine201ResponseDataProducedInner>}
     * @memberof ShipRefine201ResponseData
     */
    consumed: Array<ShipRefine201ResponseDataProducedInner>;
}

/**
 * Check if a given object implements the ShipRefine201ResponseData interface.
 */
export function instanceOfShipRefine201ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cargo" in value;
    isInstance = isInstance && "cooldown" in value;
    isInstance = isInstance && "produced" in value;
    isInstance = isInstance && "consumed" in value;

    return isInstance;
}

export function ShipRefine201ResponseDataFromJSON(json: any): ShipRefine201ResponseData {
    return ShipRefine201ResponseDataFromJSONTyped(json, false);
}

export function ShipRefine201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipRefine201ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cargo': ShipCargoFromJSON(json['cargo']),
        'cooldown': CooldownFromJSON(json['cooldown']),
        'produced': ((json['produced'] as Array<any>).map(ShipRefine201ResponseDataProducedInnerFromJSON)),
        'consumed': ((json['consumed'] as Array<any>).map(ShipRefine201ResponseDataProducedInnerFromJSON)),
    };
}

export function ShipRefine201ResponseDataToJSON(value?: ShipRefine201ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cargo': ShipCargoToJSON(value.cargo),
        'cooldown': CooldownToJSON(value.cooldown),
        'produced': ((value.produced as Array<any>).map(ShipRefine201ResponseDataProducedInnerToJSON)),
        'consumed': ((value.consumed as Array<any>).map(ShipRefine201ResponseDataProducedInnerToJSON)),
    };
}

