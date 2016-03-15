/* global define, app*/
define([
  'js/markers',
  'js/paths'
],

  function(
    markers, paths
  ) {

    function addToFeatureGroup(featureGroup, group){
      _.each(featureGroup, function(feature){
        jQuery.extend(true, {}, feature).addTo(group);
      });
    }

    var redlandsTraining1 = L.featureGroup();
    var redlandsTraining1_features = [
                            markers.wolftrap,
                            paths.viennaToScotia,
                            markers.scotia,
                            paths.scotiaToAlbany,
                            markers.albanyAirport,
                            paths.albanyToCharlotteFlight,
                            markers.charlotteAirport,
                            paths.charlotteToPhoenixFlight,
                            markers.phoenixAirport,
                            paths.phoenixToOntarioFlight,
                            markers.ontarioAirport,
                            paths.ontarioToRedlands,
                            markers.esriRedlands,
                            paths.phoenixToPhiladelphiaReturnFlight,
                            paths.phoenixToPhiladelphiaFlight,
                            markers.philadelphiaAirport,
                            paths.philadelphiaToAlbanyFlight,
                            ];

    var redlandsTraining_EM = L.featureGroup();
    var redlandsTraining_EM_features = [
                            markers.danvers,
                            paths.danversToLogan,
                            markers.loganAirport,
                            paths.loganToLAXFlight,
                            markers.laxAirport,
                            paths.laxToRedlands,
                            markers.esriRedlands
                          ];

    var wlkUgies = L.featureGroup();
    var wlkUgies_features = [
                            markers.wolftrap,
                            paths.viennaToScotia,
                            markers.scotia,
                            paths.scotiaToWyomissing,
                            markers.ugiesWyomissing,
                            paths.wyomissingToBinghamton,
                            markers.binghamton,
                            paths.binghamtonToVienna
                            ];

    var wlkSPC = L.featureGroup();
    var wlkSPC_features = [
                            markers.wolftrap,
                            paths.viennaToScotia,
                            markers.scotia,
                            paths.scotiaToAlbany,
                            markers.albanyAirport,
                            paths.albanyToReaganFlight,
                            markers.reaganAirport,
                            paths.reaganToPittsburgFlight,
                            markers.pittsburghAirport,
                            paths.pittsburgToSpc,
                            markers.spcPittsburgh
                          ];

    var wlkCNPPID = L.featureGroup();
    var wlkCNPPID_features = [
                              markers.wolftrap,
                              paths.viennaToDulles,
                              markers.dullesAirport,
                              paths.dullesToDenverFlight,
                              markers.denverAirport,
                              paths.denverToOgallala,
                              markers.cnppidOgallala
                              ];

    var wlkDELCO = L.featureGroup();
    var wlkDELCO_features = [
                            markers.danvers,
                            paths.danversToLogan,
                            markers.loganAirport,
                            paths.logantoPhiladelphiaFlight,
                            markers.philadelphiaAirport,
                            paths.philadelphiaToDelco,
                            markers.delcoMedia
                            ];

    var wlkSDOEM = L.featureGroup();
    var wlkSDOEM_features = [
                            markers.danvers,
                            paths.danversToLogan,
                            markers.loganAirport,
                            paths.loganToChicagoFlight,
                            markers.chicagoAirport,
                            paths.chicagoToRapidCityFlight,
                            markers.rapidCityAirport,
                            paths.rapidCityToPierre,
                            markers.sdoemPierre
                            ];

    var wlkOSI = L.featureGroup();
    var wlkOSI_features = [
                          markers.danvers,
                          paths.danversToMaldenCenter,
                          markers.maldenCenter,
                          paths.maldenCenterToSouthStation,
                          markers.southStation,
                          paths.southStationToPennStation,
                          markers.pennStation
                          ];

    var ratWestchesterCo = L.featureGroup();
    var ratWestchesterCo_features = [
                          markers.danvers,
                          paths.danversToWestchesterCo,
                          markers.westchesterCoNY
                          ];

    var wlkWARCO = L.featureGroup();
    var wlkWARCO_features = [
                          markers.danvers,
                          paths.danversToLogan,
                          markers.loganAirport,
                          paths.loganToSeatacFlight,
                          markers.seatacAirport,
                          paths.seatacToWARCO,
                          markers.warcoOlympia
                          ];

    var wlkBedford = L.featureGroup();
    var wlkBedford_features = [
                          markers.danvers,
                          paths.danversToLogan,
                          markers.loganAirport,
                          paths.loganToPittsburghFlight,
                          markers.pittsburghAirport,
                          paths.pittsburgToBedfordCoPA,
                          markers.bedfordCoPA
                          ];

    addToFeatureGroup(redlandsTraining1_features, redlandsTraining1);
    addToFeatureGroup(redlandsTraining_EM_features, redlandsTraining_EM);
    addToFeatureGroup(wlkUgies_features, wlkUgies);
    addToFeatureGroup(wlkSPC_features, wlkSPC);
    addToFeatureGroup(wlkCNPPID_features, wlkCNPPID);
    addToFeatureGroup(wlkDELCO_features, wlkDELCO);
    addToFeatureGroup(wlkSDOEM_features, wlkSDOEM);
    addToFeatureGroup(wlkOSI_features, wlkOSI);
    addToFeatureGroup(ratWestchesterCo_features, ratWestchesterCo);
    addToFeatureGroup(wlkWARCO_features, wlkWARCO);
    addToFeatureGroup(wlkBedford_features, wlkBedford);

    return {
     
      redlandsTraining1: redlandsTraining1,
      redlandsTraining_EM: redlandsTraining_EM,
      
      wlkUgies: wlkUgies,
      
      wlkSPC: wlkSPC,

      wlkCNPPID: wlkCNPPID,

      wlkDELCO: wlkDELCO,

      wlkSDOEM: wlkSDOEM,

      wlkOSI: wlkOSI,

      ratWestchesterCo: ratWestchesterCo,

      wlkWARCO: wlkWARCO,

      wlkBedford: wlkBedford

  };
});