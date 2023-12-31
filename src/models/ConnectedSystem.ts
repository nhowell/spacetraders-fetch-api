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
import type { SystemType } from './SystemType';
import {
    SystemTypeFromJSON,
    SystemTypeFromJSONTyped,
    SystemTypeToJSON,
} from './SystemType';

/**
 * 
 * @export
 * @interface ConnectedSystem
 */
export interface ConnectedSystem {
    /**
     * The symbol of the system.
     * @type {string}
     * @memberof ConnectedSystem
     */
    symbol: string;
    /**
     * The sector of this system.
     * @type {string}
     * @memberof ConnectedSystem
     */
    sectorSymbol: string;
    /**
     * 
     * @type {SystemType}
     * @memberof ConnectedSystem
     */
    type: SystemType;
    /**
     * The symbol of the faction that owns the connected jump gate in the system.
     * @type {string}
     * @memberof ConnectedSystem
     */
    factionSymbol?: string;
    /**
     * Position in the universe in the x axis.
     * @type {number}
     * @memberof ConnectedSystem
     */
    x: number;
    /**
     * Position in the universe in the y axis.
     * @type {number}
     * @memberof ConnectedSystem
     */
    y: number;
    /**
     * The distance of this system to the connected Jump Gate.
     * @type {number}
     * @memberof ConnectedSystem
     */
    distance: number;
}

/**
 * Check if a given object implements the ConnectedSystem interface.
 */
export function instanceOfConnectedSystem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "sectorSymbol" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;
    isInstance = isInstance && "distance" in value;

    return isInstance;
}

export function ConnectedSystemFromJSON(json: any): ConnectedSystem {
    return ConnectedSystemFromJSONTyped(json, false);
}

export function ConnectedSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectedSystem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'sectorSymbol': json['sectorSymbol'],
        'type': SystemTypeFromJSON(json['type']),
        'factionSymbol': !exists(json, 'factionSymbol') ? undefined : json['factionSymbol'],
        'x': json['x'],
        'y': json['y'],
        'distance': json['distance'],
    };
}

export function ConnectedSystemToJSON(value?: ConnectedSystem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'symbol': value.symbol,
        'sectorSymbol': value.sectorSymbol,
        'type': SystemTypeToJSON(value.type),
        'factionSymbol': value.factionSymbol,
        'x': value.x,
        'y': value.y,
        'distance': value.distance,
    };
}

