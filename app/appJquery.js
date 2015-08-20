$( document ).ready(function() {
thermostat = new Thermostat();

  var setTempColor = function(){
    $('#temperature').html(thermostat.temperature);
    $('#temperature').css("color", thermostat.tempColor);
  }

  var openWeather = function(zip) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=metric&APPID=25af7beea4240fb3f5d480afb94e6d4e", function(zipJSON) {
    $('#cityname').html(zipJSON.name);
    $('#citytemp').html(Math.round(zipJSON.main.temp));
    });
  };

  setTempColor();

  $('#increase').click(function(){
    thermostat.raise();
    setTempColor();
  });

  $('#decrease').click(function(){
    thermostat.lower();
    setTempColor();
  });

  $('#reset').click(function(){
    thermostat.resetTemp();
    setTempColor();
  });

  $('#powerSave').click(function(){
    ($("#powerSave").is(":checked")) ? thermostat.powerSaveOn() : thermostat.powerSaveOff();
    $('#temperature').html(thermostat.temperature);
  });

  $('#getWeather').click(function(){
    var zipcode = $('#zipchoice').val();
    openWeather(zipcode);
    $('#zipchoice').val();
  });

});
