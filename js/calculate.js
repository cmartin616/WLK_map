/* global define, app*/
define([],

  function() {

  return {

    calculateDistance: function(coords1, coords2){

      function toRad(Value) {
      /** Converts numeric degrees to radians */
        return Value * Math.PI / 180;
      }

      //Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344);
      var R = 3958.7558657440545; // Radius of earth in Miles 

      // var R = 6371000; // metres
      var φ1 = toRad(coords1[0]);
      var φ2 = toRad(coords2[0]);
      var Δφ = toRad(coords2[0]-coords1[0]);
      var Δλ = toRad(coords2[1]-coords1[1]);

      var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      var d = R * c;
      return d;
    }

  };
});