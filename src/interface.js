        var thermostat = new Thermostat();

        $(document).ready(function() {
            $('.current_temp').text(thermostat.temperature);
            $('.energy_usage').text(thermostat.energyUsage())
          })
        $('.temp_up').on('click', function() {
            thermostat.turnUp();
            $('.current_temp').text(thermostat.temperature);
            $('.energy_usage').text(thermostat.energyUsage())
        })
        $('.temp_down').on('click', function() {
            thermostat.turnDown();
            $('.current_temp').text(thermostat.temperature);
            $('.energy_usage').text(thermostat.energyUsage())
        })
        $('.reset_temp').on('click', function() {
            thermostat.resetTemperature();
            $('.current_temp').text(thermostat.temperature);
            $('.energy_usage').text(thermostat.energyUsage())
        })
        $('.toggle_power').on('click', function() {
            // $(this).toggleClass('toggled_off');
            if(thermostat.powerSavingMode) {
                thermostat.togglePowerSavingOff();
            } else {
                thermostat.togglePowerSavingOn();
                $('.current_temp').text(thermostat.temperature);
            };
        })