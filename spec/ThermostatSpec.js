describe('Thermostat', function() {
    var thermostat;
    beforeEach(function() {
        thermostat = new Thermostat();
    })

    describe('#initialize', function() {
        it('defaults with a temperature of 20', function() {
            expect(thermostat.checkTemp()).toEqual(thermostat.DEFAULT_TEMPERATURE)
        });

        it('has a minimum temperature of 10', function() {
            for(var i = 0; i < 11; i++) {
                thermostat.turnDown();
            }
            expect(thermostat.checkTemp()).toEqual(thermostat.MINIMUM_TEMPERATURE)
        });
        
        it('defaults power saving to on', function() {
            expect(thermostat.powerSavingMode).toEqual(true)
        });
    });
   
    describe('#turnUp', function() {
        it('increases the temperature', function() {
            thermostat.turnUp();
            expect(thermostat.checkTemp()).toEqual(thermostat.DEFAULT_TEMPERATURE + 1)
        });
        it('caps temperature at 25 if power saving on', function() {
            thermostat.togglePowerSavingOn();
            for(var i = 0; i <= 10; i++) {
                thermostat.turnUp();
            };
            expect(thermostat.checkTemp()).toEqual(thermostat.MAX_LIMIT_PSM_ON);
        });
        it('caps temperature at 32 if power saving off', function() {
            thermostat.togglePowerSavingOff();
            for(var i = 0; i <= 13; i++) {
                thermostat.turnUp();
            };
            expect(thermostat.checkTemp()).toEqual(thermostat.MAX_LIMIT_PSM_OFF);
        });
    });
    
    describe('#turnDown', function() {
        it('decreases the temperature', function() {
            thermostat.turnDown();
            expect(thermostat.checkTemp()).toEqual(thermostat.DEFAULT_TEMPERATURE - 1)
        });
        it('will not decrease below minimum temperature of 10', function() {
            for(var i = 0; i <= 11; i++ ) {
                thermostat.turnDown();
            };
            expect(thermostat.checkTemp()).toEqual(thermostat.MINIMUM_TEMPERATURE);
        });
    });   

    describe('#togglePowerSaving', function() {
        it('toggles power saving mode off', function() {
            thermostat.togglePowerSavingOff();
            expect(thermostat.powerSavingMode).toEqual(false)
        });
        it('toggles power saving mode on', function() {
            thermostat.togglePowerSavingOn();
            expect(thermostat.powerSavingMode).toEqual(true)
        });
        it('changes maximum temperature to 25 if power saving mode is on', function() {
            thermostat.togglePowerSavingOn();
            for(var i = 0; i < 15; i++) {
                thermostat.turnUp();
            }
            expect(thermostat.checkTemp()).toEqual(thermostat.MAX_LIMIT_PSM_ON)
        });
        it('changes maximum temperature to 32 if power saving mode is off', function() {
            thermostat.togglePowerSavingOff();
            for(var i = 0; i < 15; i++) {
                thermostat.turnUp();
            }
            expect(thermostat.checkTemp()).toEqual(thermostat.MAX_LIMIT_PSM_OFF)
        });
        it('reverts temperature to 25 if temperature above 25 when power saving toggled on', function() {
            thermostat.togglePowerSavingOff();
            for(var i = 0; i < 12; i++) {
                thermostat.turnUp();
            };
            thermostat.togglePowerSavingOn();
            expect(thermostat.checkTemp()).toEqual(thermostat.MAX_LIMIT_PSM_ON);
            expect(thermostat.powerSavingMode).toEqual(true);
        })
    });

    describe('#resetTemperature', function() {
        it('resets the temperature back to 20', function() {  
            thermostat.resetTemperature();
            expect(thermostat.checkTemp()).toEqual(thermostat.DEFAULT_TEMPERATURE);
        });
    });

    describe('#energyUsage', function() {
        it('returns low-usage if temperature is under 18', function() {
            for(var i = 0; i < 11; i++) {
                thermostat.turnDown();
            };
            expect(thermostat.energyUsage()).toEqual('Low Usage');
        });
        it('returns medium-usage if temperature is between 18 & 24', function() {
            expect(thermostat.energyUsage()).toEqual('Medium Usage');
        });
        it('returns high-usage if temperature is over 24', function() {
            for(var i = 0; i < 10; i++) {
                thermostat.turnUp();
            };
            expect(thermostat.energyUsage()).toEqual('High Usage');
        });
    });
});