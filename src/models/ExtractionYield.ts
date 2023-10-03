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
import type { TradeSymbol } from './TradeSymbol';
import {
    TradeSymbolFromJSON,
    TradeSymbolFromJSONTyped,
    TradeSymbolToJSON,
} from './TradeSymbol';

/**
 * A yield from the extraction operation.
 * @export
 * @interface ExtractionYield
 */
export interface ExtractionYield {
    /**
     * 
     * @type {TradeSymbol}
     * @memberof ExtractionYield
     */
    symbol: TradeSymbol;
    /**
     * The number of units extracted that were placed into the ship's cargo hold.
     * @type {number}
     * @memberof ExtractionYield
     */
    units: number;
}

/**
 * Check if a given object implements the ExtractionYield interface.
 */
export function instanceOfExtractionYield(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "units" in value;

    return isInstance;
}

export function ExtractionYieldFromJSON(json: any): ExtractionYield {
    return ExtractionYieldFromJSONTyped(json, false);
}

export function ExtractionYieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtractionYield {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': TradeSymbolFromJSON(json['symbol']),
        'units': json['units'],
    };
}

export function ExtractionYieldToJSON(value?: ExtractionYield | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'symbol': TradeSymbolToJSON(value.symbol),
        'units': value.units,
    };
}

