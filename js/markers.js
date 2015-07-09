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

      /* AIRPORTS */
      albanyAirport: L.marker(data.albanyAirportCoords, {icon: icons.airportIcon}),
      charlotteAirport: L.marker(data.charlotteAirportCoords, {icon: icons.airportIcon}),
      denverAirport: L.marker(data.denverAirportCoords, {icon: icons.airportIcon}),
      dullesAirport: L.marker(data.dullesAirportCoords, {icon: icons.airportIcon}),
      ontarioAirport: L.marker(data.ontarioAirportCoords, {icon: icons.airportIcon}),
      phoenixAirport: L.marker(data.phoenixAirportCoords, {icon: icons.airportIcon}),
      pittsburghAirport: L.marker(data.pittsburghAirportCoords, {icon: icons.airportIcon}),
      philadelphiaAirport: L.marker(data.philadelphiaAirportCoords, {icon: icons.airportIcon}),
      reaganAirport: L.marker(data.reaganAirportCoords, {icon: icons.airportIcon}),

      /* WORK LOCATIONS */
      esriRedlands: L.marker(data.esriRedlandsCoords, {icon: icons.workIcon}),
      cnppidOgallala: L.marker(data.ogallalaCoords, {icon: icons.workIcon}),
      ugiesWyomissing: L.marker(data.wyomissingCoords, {icon: icons.workIcon}),
      spcPittsburgh: L.marker(data.spcCoords, {icon: icons.workIcon}),
      
      /* OTHER LOCATIONS */
      binghamton: L.marker(data.binghamtonCoords, {icon: icons.dogIcon})
  };
});