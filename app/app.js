// $(document).ready(function() {
//   thermostat.temperature();
// };

// $('.increaseBy').on('click', function() {
//   thermostat.increaseBy(1);
//   thermostat.temperature();
//   });
thermostat = new Thermostat();
document.getElementsByTagName("main")[0].innerHTML = thermostat.temperature
