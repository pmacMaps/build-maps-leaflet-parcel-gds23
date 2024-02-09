import { tileLayer } from 'leaflet';
import { tiledMapLayer } from 'esri-leaflet';

// Open Street Map
export const osm = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});

// Esri Imagery Map Service
export const esri_imagery = tiledMapLayer({
    url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
});

// Basemap options
export const basemapLayers = {
    "Open Street Map": osm,
    "Satellite (Esri)": esri_imagery,
};