import 'leaflet.zoomhome/src/js/leaflet.zoomhome.js';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.js';
import 'leaflet-betterscale/L.Control.BetterScale.js';
import { basemapLayers} from './basemaps.js';
import { control } from 'leaflet';

// zoom and full extent control
export const zoomHomeControl = L.Control.zoomHome({
    position: 'topleft',
    zoomHomeTitle: 'Full map extent',
    homeCoordinates: [40.26, -76.89],
    homeZoom: 12
});

// scale bar control
export const scaleBarControl = L.control.betterscale({
    maxWidth: 200,
    metric: false,
    imperial: true,
    updateWhenIdle: true,
    position: 'bottomleft'
});

// locate control
export const locateControl = L.control.locate();

// Layer Control
/*
export const layerControl = control.layers(basemapLayers, null, {
    collapsed: false
});
*/

// Layer Control
export const layerControl = control.layers(basemapLayers, map_overlays, {
    collapsed: false
});
