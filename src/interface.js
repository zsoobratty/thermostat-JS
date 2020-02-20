        var thermostat = new Thermostat();

        $(document).ready(function() {
            $('.current_temp').text(thermostat.temperature);
            $('.energy_usage').text(thermostat.energyUsage())
          })
        $('.temp_up').on('click', function() {
            thermostat.turnUp();
            updateTemperature();
            $('.energy_usage').text(thermostat.energyUsage())
            
        })
        $('.temp_down').on('click', function() {
            thermostat.turnDown();
            updateTemperature();
            $('.energy_usage').text(thermostat.energyUsage())
        })
        $('.reset_temp').on('click', function() {
            thermostat.resetTemperature();
            updateTemperature();
            $('.energy_usage').text(thermostat.energyUsage())
        })
        $('.toggle_power').on('click', function() {
            if(thermostat.powerSavingMode) {
                thermostat.togglePowerSavingOff();
            } else {
                thermostat.togglePowerSavingOn();
                updateTemperature();
            };
        })

        function updateTemperature() {
            $('#current_temp').text(thermostat.temperature);
            $('#current_temp').attr('class', thermostat.energyUsage());
        };
