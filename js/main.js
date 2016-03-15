require([
  'jquery',
  'js/trips',
  'js/states',
  'js/data',
  'js/calculate',
  'bootstrap'


], function(
  $, trips, states, data, calculate
  // data, icons
) {

  app = {};

  // console.log(calculate.calculateDistance(data.wolftrapCoords, data.scotiaCoords));

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.name),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.3
    };
  }

  function getColor(d) {
    // console.log(d.properties.name);
    if (states.visited.indexOf(d) > -1) {
      return '#800026';
    }
  }

  function createPlacePopup(feature, layer) {
    // console.log(feature);
    var popup = '<a href="img/' + feature.properties.thumbnail + '"><img src="img/' + feature.properties.thumbnail + '"" height="60" width="60"></a><br />Location: ' + feature.properties.name + '<br/ >Date:  ' + feature.properties.date + '<br />Notes:  ' + feature.properties.notes + '<br />Pictures:  <a href = "img' + feature.properties.pictures + '">Pictures</a>';

    layer.bindPopup(popup);
  }

  var baseMaps = {
    streets: L.tileLayer('http://{s}.tiles.mapbox.com/v3/cmartin616.k305o0o5/{z}/{x}/{y}.png', {
      id: 'default',
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    })
  };

  var overlayMaps = {
    'Training': {
      'Redlands - JavaScript': trips.redlandsTraining1,
      'Redlands - Emergency Management': trips.redlandsTraining_EM
    },

    'WLK': {
      'Bedford, PA': trips.wlkBedford,
      'Manhattan (2x)': trips.wlkOSI,
      'Media, PA': trips.wlkDELCO,
      'Ogallala, NE': trips.wlkCNPPID,
      'Olympia, WA': trips.wlkWARCO,
      'Pierre, SD': trips.wlkSDOEM,
      'Pittsburgh, PA': trips.wlkSPC,
      'Westchester County - RAT': trips.ratWestchesterCo,
      'Wyomissing, PA': trips.wlkUgies
    }

  };

  var map = L.map('map', {
    center: [39.8282, -98.5795],
    zoom: 5,
    layers: [baseMaps.streets, trips.wlkOSI]
  });

  app.map = map;

  L.control.groupedLayers(baseMaps, overlayMaps).addTo(map);

  $.getJSON('assets/json/states.json', function(data) {
    // console.log(data)
    layer = L.geoJson(data, {
      style: style
    }).setZIndex(0).addTo(map);
    // .bindPopup('test');
  });

});