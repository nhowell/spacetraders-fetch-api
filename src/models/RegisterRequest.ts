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
import type { FactionSymbols } from './FactionSymbols';
import {
    FactionSymbolsFromJSON,
    FactionSymbolsFromJSONTyped,
    FactionSymbolsToJSON,
} from './FactionSymbols';

/**
 * 
 * @export
 * @interface RegisterRequest
 */
export interface RegisterRequest {
    /**
     * 
     * @type {FactionSymbols}
     * @memberof RegisterRequest
     */
    faction: FactionSymbols;
    /**
     * Your desired agent symbol. This will be a unique name used to represent your agent, and will be the prefix for your ships.
     * @type {string}
     * @memberof RegisterRequest
     */
    symbol: string;
    /**
     * Your email address. This is used if you reserved your call sign between resets.
     * @type {string}
     * @memberof RegisterRequest
     */
    email?: string;
}

/**
 * Check if a given object implements the RegisterRequest interface.
 */
export function instanceOfRegisterRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "faction" in value;
    isInstance = isInstance && "symbol" in value;

    return isInstance;
}

export function RegisterRequestFromJSON(json: any): RegisterRequest {
    return RegisterRequestFromJSONTyped(json, false);
}

export function RegisterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'faction': FactionSymbolsFromJSON(json['faction']),
        'symbol': json['symbol'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function RegisterRequestToJSON(value?: RegisterRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'faction': FactionSymbolsToJSON(value.faction),
        'symbol': value.symbol,
        'email': value.email,
    };
}
