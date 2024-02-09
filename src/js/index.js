import { map } from 'leaflet';
import { osm } from './basemaps.js';
import { zoomHomeControl, scaleBarControl, locateControl, layerControl} from './mapControls.js';
import { greenbelt, bus_stops, bus_routes, parks_playgrounds } from './overlays.js';

// webmap
const webmap = map('webmap', {
    center: [40.26, -76.89],
    zoom: 12,
    zoomControl: false
});

// add open street map as basemap
osm.addTo(webmap);

// add map controls
layerControl.addTo(webmap);
zoomHomeControl.addTo(webmap);
scaleBarControl.addTo(webmap);
locateControl.addTo(webmap);

// add overlays to map
parks_playgrounds.addTo(webmap);
greenbelt.addTo(webmap);
bus_stops.addTo(webmap);
bus_routes.addTo(webmap);