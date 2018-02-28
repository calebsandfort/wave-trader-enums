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
TradeTypes.initEnum([['None', 'None'], ['LongFuture', 'Long Future'], ['ShortFuture', 'Short Future'], ['CoveredCall', 'Covered Call'], ['BullPutSpread', 'Bull Put Spread']]);

export default TradeTypes;
