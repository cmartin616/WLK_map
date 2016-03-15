/* global define, app*/
define([
  'js/data',
  'js/calculate'
  ],

  function(
    data, calculate
  ) {

    function createLine(pointList, options){
      var line = new L.Polyline(pointList, {
        color: options.color,
        weight: options.weight,
        opacity: 1,
        smoothFactor: 1,
        bindPopup: calculate.calculateDistance(pointList[0], pointList[1])
        });

      return line;
    }

    var drive = {
                  color: 'red',
                  weight: 3
                };
    var flight = {
                  color: 'blue',
                  weight: 3
                };
    var train = {
                  color: 'green',
                  weight: 3
                };

  return {

    /* DRIVE PATHS */

    binghamtonToVienna: createLine([data.binghamtonCoords, data.wolftrapCoords], drive, 3),

    danversToLogan: createLine([data.danversCoords, data.loganAirportCoords], drive, 3),

    danversToMaldenCenter: createLine([data.danversCoords, data.maldenCenter], drive, 3),

    danversToWestchesterCo: createLine([data.danversCoords, data.westchesterCoCoords], drive, 3),

    denverToOgallala: createLine([data.denverAirportCoords, data.ogallalaCoords], drive, 3),

    laxToRedlands: createLine([data.laxAirportCoords, data.esriRedlandsCoords], drive, 3),

    ontarioToRedlands: createLine([data.ontarioAirportCoords, data.esriRedlandsCoords], drive, 3),

    pittsburgToBedfordCoPA: createLine([data.pittsburghAirportCoords, data.bedfordPACoords], drive, 3),

    pittsburgToSpc: createLine([data.pittsburghAirportCoords, data.spcCoords], drive, 3),

    seatacToWARCO: createLine([data.seatacAirportCoords, data.warcoCoords], drive, 3),

    scotiaToAlbany: createLine([data.scotiaCoords, data.albanyAirportCoords], drive, 3),
    scotiaToWyomissing: createLine([data.scotiaCoords, data.wyomissingCoords], drive, 3),

    viennaToScotia: createLine([data.wolftrapCoords, data.scotiaCoords], drive, 3),
    viennaToDulles: createLine([data.wolftrapCoords, data.dullesAirportCoords], drive, 3),

    wyomissingToBinghamton: createLine([data.wyomissingCoords, data.binghamtonCoords], drive, 3),

    philadelphiaToDelco: createLine([data.philadelphiaAirportCoords, data.mediaCoords], drive, 3),

    rapidCityToPierre: createLine([data.rapidCityAirportCoords, data.sdoemCoords], drive, 3),
    
    /* FLIGHT PATHS */

    albanyToCharlotteFlight: createLine([data.albanyAirportCoords, data.charlotteAirportCoords], flight, 3),
    albanyToOntarioFlight: createLine([data.albanyAirportCoords, data.ontarioAirportCoords], flight, 3),
    albanyToPittsburghFlight: createLine([data.albanyAirportCoords, data.pittsburghAirportCoords], flight, 3),
    albanyToReaganFlight: createLine([data.albanyAirportCoords, data.reaganAirportCoords], flight, 3),
    charlotteToPhoenixFlight: createLine([data.charlotteAirportCoords, data.phoenixAirportCoords], flight, 3),
    chicagoToRapidCityFlight: createLine([data.chicagoAirportCoords, data.rapidCityAirportCoords], flight, 3),
    dullesToDenverFlight: createLine([data.dullesAirportCoords, data.denverAirportCoords], flight, 3),
    loganToChicagoFlight: createLine([data.loganAirportCoords, data.chicagoAirportCoords], flight, 3),
    loganToLAXFlight: createLine([data.loganAirportCoords, data.laxAirportCoords], flight, 3),
    loganToPittsburghFlight: createLine([data.loganAirportCoords, data.pittsburghAirportCoords], flight, 3),
    logantoPhiladelphiaFlight: createLine([data.loganAirportCoords, data.philadelphiaAirportCoords], flight, 3),
    loganToSeatacFlight: createLine([data.loganAirportCoords, data.seatacAirportCoords], flight, 3),
    philadelphiaToAlbanyFlight: createLine([data.philadelphiaAirportCoords, data.albanyAirportCoords], flight, 3),
    phoenixToPhiladelphiaFlight: createLine([data.phoenixAirportCoords, data.philadelphiaAirportCoords], flight, 3),
    phoenixToPhiladelphiaReturnFlight: createLine([data.phoenixAirportCoords, data.philadelphiaAirportCoords], 'green', 10),
    phoenixToOntarioFlight: createLine([data.phoenixAirportCoords, data.ontarioAirportCoords], flight, 3),
    reaganToPittsburgFlight: createLine([data.reaganAirportCoords, data.pittsburghAirportCoords], flight, 3),


    /* TRAIN PATHS */
    maldenCenterToSouthStation: createLine([data.maldenCenter, data.southStation], train, 3),
    southStationToPennStation: createLine([data.southStation, data.pennStation], train, 3)
  };
});