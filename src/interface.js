        var thermostat = new Thermostat();

        $(document).ready(function() {
            $('.current_temp').text(thermostat.temperature + '°C');
            $('.energy_usage').text(thermostat.energyUsage())
            locationTemp();
          })
        $('.temp_up').on('click', function() {
            thermostat.turnUp();
            updateTemperature();
            
        })
        $('.temp_down').on('click', function() {
            thermostat.turnDown();
            updateTemperature();
        })
        $('.reset_temp').on('click', function() {
            thermostat.resetTemperature();
            updateTemperature();
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
            $('#current_temp').text(thermostat.temperature + '°C');
            $('body').attr('class', thermostat.energyUsage());
            $('.energy_usage').text(thermostat.energyUsage());
        };
        
        function locationTemp () {
            $('#select-city').submit(function(event) {
                event.preventDefault();
                var url = "https://api.openweathermap.org/data/2.5/weather?q="
                var city = $('#current-city').val();
                var units = "units=metric"
                var token = "&appid=0c76eba986811f68453c8d968330713b&"
                $.get(url + city + token + units, function(data) {
                    $('#location_temp').text(data.name + " " + Math.floor(data.main.temp) + '°C');
                });
            });
        };
