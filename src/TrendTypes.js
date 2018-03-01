import {Enum} from './enumify';

// None,
//     [EnumDisplay("Bearish")]
// Bearish,
//     [EnumDisplay("Neutral")]
// Neutral,
//     [EnumDisplay("Bullish")]
// Bullish

export class TrendTypes extends Enum {}
TrendTypes.initEnum([['None', 'None'], ['Bearish', 'Bearish'], ['Neutral', 'Neutral'], ['Bullish', 'Bullish']]);

export default TrendTypes;
