thermostat = new Thermostat();

document.getElementById('temperature').style.color = thermostat.tempColor;

var temperature = document.getElementById('temperature');
  temperature.innerHTML = thermostat.temperature;

var upTemperature = document.getElementById('increase');
  upTemperature.onclick = function() {
    thermostat.raise();
    temperature.innerHTML = thermostat.temperature;
    document.getElementById('temperature').style.color = thermostat.tempColor;
  }

var downTemperature = document.getElementById('decrease');
  downTemperature.onclick = function() {
    thermostat.lower();
    temperature.innerHTML = thermostat.temperature;
    document.getElementById('temperature').style.color = thermostat.tempColor;
  }

var resetTemperature = document.getElementById('reset');
  resetTemperature.onclick = function() {
    thermostat.resetTemp();
    temperature.innerHTML = thermostat.temperature;
    document.getElementById('temperature').style.color = thermostat.tempColor;
  }

var powerSaveStatus = document.getElementById('powerSave');
  powerSaveStatus.onclick = function() {
    (powerSaveStatus.checked) ? thermostat.powerSaveOn() : thermostat.powerSaveOff();
  }
