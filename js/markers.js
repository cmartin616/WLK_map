/* global define, app*/
define([
  'js/data',
  'js/icons'
],

  function(
    data, icons
  ) {

    return {

      /* HOME LOCATIONS */
      scotia: L.marker(data.scotiaCoords, {icon: icons.dogIcon}),
      wolftrap: L.marker(data.wolftrapCoords, {icon: icons.homeIcon}),
      danvers: L.marker(data.danversCoords, {icon: icons.homeIcon}),

      /* AIRPORTS */
      albanyAirport: L.marker(data.albanyAirportCoords, {icon: icons.airportIcon}),
      charlotteAirport: L.marker(data.charlotteAirportCoords, {icon: icons.airportIcon}),
      chicagoAirport: L.marker(data.chicagoAirportCoords, {icon:icons.airportIcon}),
      denverAirport: L.marker(data.denverAirportCoords, {icon: icons.airportIcon}),
      dullesAirport: L.marker(data.dullesAirportCoords, {icon: icons.airportIcon}),
      laxAirport: L.marker(data.laxAirportCoords, {icon:icons.airportIcon}),
      loganAirport: L.marker(data.loganAirportCoords, {icon: icons.airportIcon}),
      ontarioAirport: L.marker(data.ontarioAirportCoords, {icon: icons.airportIcon}),
      phoenixAirport: L.marker(data.phoenixAirportCoords, {icon: icons.airportIcon}),
      pittsburghAirport: L.marker(data.pittsburghAirportCoords, {icon: icons.airportIcon}),
      philadelphiaAirport: L.marker(data.philadelphiaAirportCoords, {icon: icons.airportIcon}),
      rapidCityAirport: L.marker(data.rapidCityAirportCoords, {icon: icons.airportIcon}),
      reaganAirport: L.marker(data.reaganAirportCoords, {icon: icons.airportIcon}),
      seatacAirport: L.marker(data.seatacAirportCoords, {icon: icons.airportIcon}),

      /* TRAIN LOCATIONS */
      maldenCenter: L.marker(data.maldenCenter, {icon: icons.trainIcon}),
      pennStation: L.marker(data.pennStation, {icon: icons.trainIcon}),
      southStation: L.marker(data.southStation, {icon: icons.trainIcon}),

      /* WORK LOCATIONS */
      esriRedlands: L.marker(data.esriRedlandsCoords, {icon: icons.workIcon}),
      cnppidOgallala: L.marker(data.ogallalaCoords, {icon: icons.workIcon}),
      delcoMedia: L.marker(data.mediaCoords, {icons: icons.workIcon}),
      ugiesWyomissing: L.marker(data.wyomissingCoords, {icon: icons.workIcon}),
      spcPittsburgh: L.marker(data.spcCoords, {icon: icons.workIcon}),
      sdoemPierre: L.marker(data.sdoemCoords, {icon: icons.workIcon}),
      warcoOlympia: L.marker(data.warcoCoords, {icon: icons.workIcon}),
      westchesterCoNY: L.marker(data.westchesterCoCoords, {icon: icons.workIcon}),
      bedfordCoPA: L.marker(data.bedfordPACoords, {icon:icons.workIcon}),
      
      /* OTHER LOCATIONS */
      binghamton: L.marker(data.binghamtonCoords, {icon: icons.dogIcon})
  };
});