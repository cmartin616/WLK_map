$(function() {
  
  function createLine(pointList, color){
    var line = new L.Polyline(pointList, {
      color: color,
      weight: 3,
      opacity: 1,
      smoothFactor: 1

      });
    return line;
  }

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
    if (statesVisited.indexOf(d) > -1) {
      return '#800026';
    }
  }

  function createPlacePopup(feature, layer) {
    // console.log(feature);
    var popup = '<a href="img/' + feature.properties.thumbnail + '"><img src="img/'+ feature.properties.thumbnail + '"" height="60" width="60"></a><br />Location: ' + feature.properties.name + '<br/ >Date:  ' + feature.properties.date + '<br />Notes:  ' + feature.properties.notes + '<br />Pictures:  <a href = "img' + feature.properties.pictures + '">Pictures</a>';

    layer.bindPopup(popup);
  }

  var wolftrapCoords = [38.910847, -77.248518];
  var scotiaCoords = [42.829591, -73.979668];
  var wyomissingCoords = [40.354292, -75.986396];
  var albanyAirportCoords = [42.748334, -73.806700];
  var pittsburgAirportCoords = [40.495903, -80.242170];
  var ontarioAirportCoords = [34.056405, -117.599602];
  var esriRedlandsCoords = [34.056295, -117.195777];

  var airportIcon = L.icon({
    iconUrl: 'assets/images/Airport-Blue-2-icon.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var homeIcon = L.icon({
    iconUrl: 'assets/images/home.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var workIcon = L.icon({
    iconUrl: 'assets/images/work.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var dogIcon = L.icon({
    iconUrl: 'assets/images/dog.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

    // var albanyToWyomissingTrip = [wolftrap, scotia, wyomissing];
  // var albToWyomissing = createLine(albanyToWyomissingTrip, 'red');
  // albToWyomissing.addTo(map);

  // var albanyToPittsburgTrip = [albanyAirport, pittsburgAirport];
  // var albToPittsburg = createLine(albanyToPittsburgTrip, 'blue');
  // albToPittsburg.addTo(map);


  // var albApt = L.marker(albanyAirport, {icon: airportIcon}).addTo(map);
  // var pitApt = L.marker(pittsburgAirport, {icon: airportIcon}).addTo(map);

  /* HOME LOCATIONS */
  var scotia = L.marker(scotiaCoords, {icon: dogIcon});
  var wolftrap = L.marker(wolftrapCoords, {icon:homeIcon});

  /* AIRPORTS */
  var albanyAirport = L.marker(albanyAirportCoords, {icon: airportIcon});
  var pittsburgAirport = L.marker(pittsburgAirportCoords, {icon: airportIcon});
  var ontarioAirport = L.marker(ontarioAirportCoords, {icon: airportIcon});

  /* WORK LOCATIONS */

  var esriRedlands = L.marker(esriRedlandsCoords, {icon: workIcon});
  var ugiesWyomissing = L.marker(wyomissingCoords, {icon: workIcon});

  /* DRIVE PATHS */

  var viennaToScotia = createLine([wolftrapCoords, scotiaCoords], 'red');
  var scotiaToAlbany = createLine([scotiaCoords, albanyAirportCoords], 'red');
  var ontarioToRedlands = createLine([ontarioAirportCoords, esriRedlandsCoords], 'red');

  var scotiaToWyomissing = createLine([scotiaCoords, wyomissingCoords], 'red');

  /* FLIGHT PATHS */

  var albanyToOntarioFlight = createLine([albanyAirportCoords, ontarioAirportCoords], 'blue');

  

  

  var airports = L.layerGroup([albanyAirport,pittsburgAirport]);
  var redlandsTraining1 = L.layerGroup([wolftrap, viennaToScotia, scotia, scotiaToAlbany, albanyAirport, ontarioAirport, albanyToOntarioFlight, ontarioToRedlands, esriRedlands]);
  var wlkUgies = L.layerGroup([wolftrap, viennaToScotia, scotia, scotiaToWyomissing, ugiesWyomissing]);

  var basemap = L.tileLayer('http://{s}.tiles.mapbox.com/v3/cmartin616.k305o0o5/{z}/{x}/{y}.png', {
    id: 'default',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
  });

  var baseMaps = {
    'Basemap': basemap,
    
  };

  var overlayMaps = {
    'Redlands Training': redlandsTraining1,
    'UGIES - WLK': wlkUgies
  };

  var map = L.map('map', {
    center: [39.8282, -98.5795],
    zoom: 5,
    layers: [basemap, wlkUgies]
  });

  L.control.layers(overlayMaps, baseMaps).addTo(map);


  var statesVisited = [
    'Colorado',
    'Massachusetts',
    'Nebraska',
    'Pennsylvania',
    'Virginia',
    ];

  
  map.on('baselayerchange', function(layer){
    evt.preventDefault();
    console.log('add', layer);
    console.log(layer.name);
    console.log(overlayMaps[layer.name]);
    _.each(baseMaps, function(baseMap){
      map.removeLayer(baseMap);
    });

    overlayMaps[layer.name].addTo(map);
  });
  
  

  

  $.getJSON('assets/json/states.json', function(data) {
    // console.log(data)
    layer = L.geoJson(data, {
      style: style
    }).addTo(map);
    // .bindPopup('test');
  });
  // $.getJSON('assets/json/places.json', function(data) {
  //   layer = L.geoJson(data, {
  //     onEachFeature: createPlacePopup
  //   }).addTo(map);
  //   // .bindPopup('test');
  // });

  

  
});