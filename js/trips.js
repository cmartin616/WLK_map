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

    console.log(paths.reaganToPittsburgFlight);
    console.log(paths.albanyToPittsburghFlight);

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

    addToFeatureGroup(redlandsTraining1_features, redlandsTraining1);
    addToFeatureGroup(wlkUgies_features, wlkUgies);
    addToFeatureGroup(wlkSPC_features, wlkSPC);
    addToFeatureGroup(wlkCNPPID_features, wlkCNPPID);

    return {
     
      redlandsTraining1: redlandsTraining1,
      
      wlkUgies: wlkUgies,
      
      wlkSPC: wlkSPC,

      wlkCNPPID: wlkCNPPID

  };
});