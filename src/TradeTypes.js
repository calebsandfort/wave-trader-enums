import {Enum} from './enumify';

// None,
//     [EnumDisplay("Long Future")]
// LongFuture,
//     [EnumDisplay("Short Future")]
// ShortFuture,
//     [EnumDisplay("Covered Call")]
// CoveredCall,
//     [EnumDisplay("Bull Put Spread")]
// BullPutSpread

export class TradeTypes extends Enum {}
TradeTypes.initEnum([['None', 'None'], ['Long', 'Long'], ['Short', 'Short']]);

export default TradeTypes;
