import { featureLayer } from 'esri-leaflet';
import { icon, marker, geoJSON } from 'leaflet';
import 'esri-leaflet-renderers';

// parks & playgrounds data file
// source: https://harrisburg-open-data-cohbg.opendata.arcgis.com/datasets/201e2a9538144b22b106ccd7d7d73846_0
const parks_data = require('../data/Harrisburg_Parks_Playgrounds.geojson');

// parks & playgrounds layer
export const parks_playgrounds = geoJSON(parks_data, {
    style: function(feature) {
        return {
            color: '#ffffff',
            weight: 2,
            fillColor: '#0e5850',
            fillOpacity: 0.5
        }
    }
});

// create popup for parks/playgrounds
parks_playgrounds.bindPopup(function(layer) {
    // field containing URL to image
    const img_field = layer.feature.properties.Picture;
    // image url content to display in popup
    let img_url_content;
    
    // test for no data
    if (img_field === ' ' || img_field === '' || img_field === null) {
        // no data
        img_url_content = '';
    } else {
        // content exists
        const img_url = layer.feature.properties.Picture.split('?')[0];
        img_url_content = `<img style="object-fit: cover" alt="playground or park in Harrisburg, PA" height=100 width=250 src="${img_url}" />`;
    }     

    let content = '<div>';
    content += '<h3>{Name}</h3>';
    content += '<p>Located at {Address}</p>'
    //content += '<img alt="playground or park in Harrisburg, PA" src="{Picture}" />';
    content += img_url_content;
    content += '</div>';
    return L.Util.template(content, layer.feature.properties);
});

// parent service URL
hbg_parent_url = 'https://services5.arcgis.com/9n3LUAMi3B692MBL/ArcGIS/rest/services/Multimodal_Transportation_Map_WFL1/FeatureServer';

// capital area greenbelt
export const greenbelt = featureLayer({
    url: `${hbg_parent_url}/5`,
    where: "Name = 'CAGA'",
    style: function(feature) {
        return {
            color: '#800909',
            weight: 3.5,
            dashArray: '4 4'
        }
    }
});

// bus icon sourced at https://www.flaticon.com/free-icon/bus-stop_3448339?term=bus+stop&page=1&position=6&origin=search&related_id=3448339
const bus_icon = icon({
    iconUrl: require('../data/bus-stop.png'),
    iconSize: [30,30]
});

// cat bus stops
export const bus_stops = featureLayer({
    url: `${hbg_parent_url}/3`,
    pointToLayer: function (geojson, latlng) {
        return marker(latlng, {
            icon: bus_icon,
            alt: 'icon of a bus representing a CAT bus stop'
        })
    },
    ignoreRenderer: true
});

// create popup for bus stops
bus_stops.bindPopup(function (layer) {
    let content = '<div>';
    content += '<h3 style="text-align:center">Bus Stop</h3>';
    content += '<p>Coordinates: {Latitude}; {Longitude}</p>';
    content += '<p>Location: {Descriptio}</p>';
    content += '</div>';
    return L.Util.template(content, layer.feature.properties);
});

// cat bus routes
export const bus_routes = featureLayer({
    url: `${hbg_parent_url}/4`,
    style: function(feature) {
        return {
            weight: 4
        }
    }
});

// list of map overlayers for layer toggle
export const map_overlays = {
    "Greenbelt Trail": greenbelt,
    "Parks & Playgrounds": parks_playgrounds,
    "Bus Stops": bus_stops,
    "Bus Routes": bus_routes
}
// create popup for bus routes
bus_routes.bindPopup(function (layer) {
    return L.Util.template("<h3>{ROUTE_NAME}</h3>", layer.feature.properties);
});
