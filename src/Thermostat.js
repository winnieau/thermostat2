var Thermostat = function(){
  this.temperature = 20;
  this.powerSavemode = true;
  this.defaultMaxTemp = 32;
  this.powerSaveMaxTemp = 25;
  this.defaultMinTemp = 10;
};

Thermostat.prototype.raise = function(){
  if (this.powerSavemode) {
    if(this.temperature < this.powerSaveMaxTemp) {
      this.temperature++;
    }
  } else {
    if (this.temperature < this.defaultMaxTemp) {
      this.temperature++;
    }
  }
};

Thermostat.prototype.lower = function(){
  if(this.temperature > this.defaultMinTemp) {
    this.temperature--;
  }
};

Thermostat.prototype.powerSaveOff = function(){
  this.powerSavemode = false;
};

Thermostat.prototype.powerSaveOn = function(){
  this.powerSavemode = true;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};
