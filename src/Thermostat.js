'use strict'

function Thermostat() {
    this.DEFAULT_TEMPERATURE = 20
    this.temperature = this.DEFAULT_TEMPERATURE
    this.MINIMUM_TEMPERATURE = 10
    this.powerSavingMode = true
    this.MAX_LIMIT_PSM_ON = 25
    this.MAX_LIMIT_PSM_OFF = 32
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18
};

Thermostat.prototype.checkTemp = function() {
    return this.temperature
};

Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.turnUp = function() {
    if(this.powerSavingMode) {
        if(this.temperature === this.MAX_LIMIT_PSM_ON) {
            return;
        } else {
            this.temperature += 1
        };
    } else {
        if(this.temperature === this.MAX_LIMIT_PSM_OFF) {
            return;
        } else {
            this.temperature += 1
        };
    };
};

Thermostat.prototype.turnDown = function() {
    if(this.isMinimumTemperature()) {
        return;
    } else {
        this.temperature -= 1
    };
};

Thermostat.prototype.togglePowerSavingOn = function() {
    this.powerSavingMode = true
    if (this.temperature > this.MAX_LIMIT_PSM_ON) {
        this.temperature = this.MAX_LIMIT_PSM_ON
    };
};

Thermostat.prototype.togglePowerSavingOff = function() {
    this.powerSavingMode = false
};

Thermostat.prototype.resetTemperature = function() {
    this.temperature = this.DEFAULT_TEMPERATURE
};

Thermostat.prototype.energyUsage = function() {
    if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
        return 'Low Usage'
    } else if(this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature < this.MAX_LIMIT_PSM_ON) {
        return 'Medium Usage'
    } else {
        return 'High Usage'
    };
};
