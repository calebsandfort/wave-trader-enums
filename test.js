let chai = require('chai');
let should = chai.should();
const PerformanceCycleTypes = require("./lib").PerformanceCycleTypes;
const TradingTypes = require("./lib").TradingTypes;

describe('Enums', () => {

    describe('PerformanceCycleTypes - enumOrdinalOf', () => {
        it('it should get the PerformanceCycleType for the specified ordinal', () => {
            const pct = PerformanceCycleTypes.enumOrdinalOf(4);
            pct.ordinal.should.be.eql(4);
            pct.name.should.be.eql("DayOfWeek");
            pct.display.should.be.eql("Day of Week");
        });
    });

    describe('TradingTypes - enumOrdinalOf', () => {
        it('it should get the TradingTypes for the specified ordinal', () => {
            const pct = TradingTypes.enumOrdinalOf(1);
            pct.ordinal.should.be.eql(1);
            pct.name.should.be.eql("LongFuture");
            pct.display.should.be.eql("Long Future");
        });
    });
});
