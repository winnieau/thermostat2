$( document ).ready(function() {
thermostat = new Thermostat();

  var setTempColor = function(){
    $('#temperature').html(thermostat.temperature);
    $('#temperature').css("color", thermostat.tempColor);
  }

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

});
