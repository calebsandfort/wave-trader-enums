import {Enum} from './enumify';

// None,
//     [EnumDisplay("Signals")]
// Signals,
//     [EnumDisplay("Support")]
// Support,
//     [EnumDisplay("Resistance")]
// Resistance,
//     [EnumDisplay("Bullish Breakout")]
// BullishBreakout,
//     [EnumDisplay("Bearish Breakout")]
// BearishBreakout

export class TradeTriggers extends Enum {}
TradeTriggers.initEnum([['None', 'None'], ['Signals', 'Signals'], ['Support', 'Support'], ['Resistance', 'Resistance'], ['BullishBreakout', 'Bullish Breakout'], ['BearishBreakout', 'Bearish Breakout']]);

export default TradeTriggers;
