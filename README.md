# Coding Interactive Web Maps: A Hands-On Guide to Building with Leaflet.js and Parcel.js

This repository contains the general outline and project files for a presentation I gave at the 2023 [GeoDev Summit](https://summits.harrisburgu.edu/geodev/), held in Harrisburg, Pennsylvania.

## Required Software
- Visual Studio Code ([download software](https://code.visualstudio.com/download)): Where we'll be writing our code
- Node.js ([download software](https://nodejs.org/en/download/)): We'll use Node.js and NPM to install the libraries we'll use in our map application

## Software Packages
### Development
- [Parcel.js](https://parceljs.org/): The build tool we'll use to package the files into our final application; also provides a nice development environment
- [Parcel GeoJSON Transformer](https://www.npmjs.com/package/parcel-transformer-geojson): A Parcel.js plugin that allows us to use GeoJSON data in our map application
### Standard
- [Leaflet.js](https://leafletjs.com/): Library to build interactive web maps
- [Leaflet Better Scale](https://github.com/daniellsu/leaflet-betterscale): Plugin to create an enhanced map scale bar
- [Leaflet Fullscreen](https://github.com/Leaflet/Leaflet.fullscreen): Plugin to allow the map to go into fullscreen mode
- [Leaflet Locate Control](https://github.com/domoritz/leaflet-locatecontrol): Plugin to add a "locate me" widget to map (allows users to identify their current location)
- [Leaflet Zoomhome](https://github.com/torfsen/leaflet.zoomhome): Plugin to add a zoom control with a default extent button
- [Esri Leaflet](https://github.com/Esri/esri-leaflet): Plugin to allow access to Esri REST services
- [Esri Leaflet Renderers](https://developers.arcgis.com/esri-leaflet/samples/renderers-plugin/): Plugin to display symbology associated with a REST service
- [Normalize.css](https://necolas.github.io/normalize.css/): Plugin to add standard CSS rules to web browser
- [Font Awesome](https://fontawesome.com/): Plugin used to display icons in Leaflet widgets

## Set-up Project with NPM 
1. Create a new project directory on your computer
2. Open VS Code in your project directory
3. Open the Terminal in VS Code (complete the following steps within the Terminal)
4. Initialize the project by typing the `npm init` command
5. Complete the project initialization
6. Type `yes` to complete initialization
   
You will now notice a `package.json` file in your project directory.  This file will contain a listing of the project libraries and other details for map application.

You can open your project in Visual Studio Code by right-clicking in the folder and selecting `Open with Code`. (note, Windows 11 requires you to select "Show more options" when right-clicking the folder.)

## Install NPM Packages

You will be installing various JavaScript libraries to build the map application.  The `package.json` file contains a record of which packages (or libraries) your project is using. These are called `dependencies`. 

Once you're found a library you like, you can search for it on https://www.npmjs.com/.  

For example, you may discover the Leaflet Betterscale project on [GitHub](https://github.com/daniellsu/leaflet-betterscale).  You could then search for `leaflet-betterscale` on NPM.  You would find the package at https://www.npmjs.com/package/leaflet-betterscale.  You can install the package by typing `npm i leaflet-betterscale` in the command line.

Some packages are used for the development of your project.  This includes Parcel.js.  These are called `devDependencies`.  They are installed by typing `npm install some-package --save-dev`.

### Commands to Install Packages

- `npm i parcel --save-dev`
- `npm i parcel-transformer-geojson --save-dev`
- `npm i leaflet`
- `npm i leaflet-betterscale`
- `npm i leaflet-fullscreen`
- `npm i leaflet.locatecontrol`
- `npm i leaflet.zoomhome`
- `npm i esri-leaflet`
- `npm i esri-leaflet-renderers`
- `npm i normalize.css`
- `npm i font-awesome`

## Configure Parcel.js

We need to make a few changes to the `package.json` file configure it to work with Parcel.js:
- add `"source": "src/index.html",` : this defines the entry point for Parcel. This is the file that Parcel starts at when building the source code.
- remove `"main": "index.js"` : we won't be using this.
- add `"browserslist": "> 0.5%, last 2 versions, not dead",` : the browser list configuration is used to specify the target browsers that your code should support.  As written, our application should support browsers that have a global usage percentage greater than 0.5%, support the last 2 versions of web browsers, and excludes web browers that are no longer maintained (I used Chat-GPT to explain this property)
- add `"private": true,` : this prevents NPM from publishing your project
- within `scripts`, add `"start": "parcel",` : allows you to type `npm run start` to start the Parcel process
- within `scripts`, add `"build": "parcel build"` : allows you to type `npm run build` to build the production-ready version of your application files

We need to create a `.parcelrc` file to support the .geojson format.  In this file, we'll add:
```
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.geojson": ["parcel-transformer-geojson"]
  }
}
```
Next, we need to add the `src` directory.  We will store our application files here.  Within the `src` directory, create `js` and `data` directories.

## Create Map Application

### Index.html

1) In the `src` directory, create a `index.html` file
2) In the `src` directory, creat a `style.css` file
3) In the `src\js` directory, create an `index.js` file
4) With the `index.html` file open in VS Code, type `html`, and select `html:5` (pre-populates file)
6) Update the `title` element (i.e. "A Sample Webmap")
7) Add `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">` tag (helps web map feel like an app)
8) Within the `body` element, create two `section` elements (heading block and webmap container)
9) The first `section` element should have an `id="heading"` property; the second `section` element should have an `id="webmap"` property
10) In the terminal or command prompt, type `npm run start` (click link or visit http://localhost:1234/ to preview website)
11) Within the heading `section` element, add an `h1` element; 
12) Before the closing `body` tag, add a `script` element; add a `type="module"` attribute; add a `src="./js/index.js"` attribute
13) Before the closing `head` tage, add `<link rel="stylesheet" href="./css/style.css">`

### Style.css

#### Import Libraries
1) Import Normalize library by adding `@import '../node_modules/normalize.css/normalize.css';`
2) Import Font Aweomse library by adding `@import '../node_modules/font-awesome/css/font-awesome.css';`
3) Import Leaflet library by adding `@import '../node_modules/leaflet/dist/leaflet.css';`
4) Import Leaflet Fullscreen by adding `@import '../node_modules/leaflet-fullscreen/dist/leaflet.fullscreen.css';`
5) Import Leaflet Locate by adding `@import '../node_modules/leaflet.locatecontrol/dist/L.Control.Locate.css';`
6) Import Leaflet Zoomhom by adding `@import '../node_modules/leaflet.zoomhome/src/css/leaflet.zoomhome.css';`
7) Import Leaflet BetterScale by adding `@import '../node_modules/leaflet-betterscale/L.Control.BetterScale.css';`

#### Set Styles for Map App

Add the project styles that are found in the [reference stylesheet](https://github.com/pmacMaps/build-maps-leaflet-parcel-gds23/blob/main/src/our_styles.css).

### JavaScript 

#### Index.js

This is our primary JavaScript file.  We will be importing variables from other JavaScript files (modules) into this file.  To provide some context, we will create our interactive map object.

1) Import the `map` object from Leaflet by adding `import { map } from 'leaflet';`
2) Create a variable named `webmap`; assign it to the Leaflet `map` class (`const webmap = map('webmap', { center: [40.26, -76.89], zoom: 12});`)
3) In the `src/js` directory, create a `basemaps.js` file.  This will store our basemap variables.

#### Basemaps.js

1) In the `basemaps.js` file, import Leaflet's `tileLayer` class by adding `import { tileLayer } from 'leaflet'`;
2) Create a variable to reference the OpenStreetMap basemap.  We use the keyword `export` so that we can use the variable in other modules (`export const osm = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'});`

#### Index.js
1) In the `index.js` file, add `import { osm } from './basemaps.js';` so that we can set our basemap to OpenStreetMap
2) Add OpenStreetMap to the webmap.  We can add layers and map controls with the `addTo()` method (`osm.addTo(webmap);`)

#### MapControls.js

1) create a `mapControls.js` file in the `src/js` directory; it will be used to store our map interface objects.
2) Import Leaflet Zoomhome by writing `import 'leaflet.zoomhome/src/js/leaflet.zoomhome.js';`
3) Import Leaflet Locate Control by writing `import 'leaflet.locatecontrol/dist/L.Control.Locate.min.js';`
4) Import Leaflet Better Scale by writing `import 'leaflet-betterscale/L.Control.BetterScale.js';`
5) Create a variable for Leaflet Zoom Home control (`export const zoomHomeControl = L.Control.zoomHome({position: 'topleft', zoomHomeTitle: 'Full map extent', homeCoordinates: [40.26, -76.89], homeZoom: 12});`)
6) Create a variable for Leaflet Better Scale control (`export const scaleBarControl = L.control.betterscale({maxWidth: 200, metric: false, imperial: true, updateWhenIdle: true, position: 'bottomleft'});`)
7) Create a variable for Leaflet Locate control (`export const locateControl = L.control.locate();`)

#### Index.js

1) Import the new controls from `mapControls.js` into `index.js` (`import { zoomHomeControl, scaleBarControl, locateControl} from './mapControls.js';`)
2) Add `zoomControl: false` property to your `webmap` variable to allow Zoom Home Control to take over the work of the zoom control
3) Add the map controls to the webmap using the `addTo()` method

#### Basemaps.js

1) Back in `basemaps.js`, import Esri Leaflet's `tiledMapLayer` class.  It allows us to use raster-based cached map services (`import { tiledMapLayer } from 'esri-leaflet';`)
3) Create a variable to reference the Esri World Imagery service (`https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer`)
5) Create an object to reference the two basemaps.  We'll use it to create a basemap selector object in `mapControls.js` (`export const basemapLayers = {"Open Street Map": osm, "Satellite (Esri)": esri_imagery};`)

#### MapControls.js

1) Import the basemaps object (`import { basemapLayers} from './basemaps.js';`)
2) Create a layer control object.  This allows users to switch between basemaps, as well as turn overlays on/off (`control.layers(basemapLayers, null, { collapsed: false });`)

#### Index.js

1) add the layer control object to your imports from `mapControls.js` statement
2) Add the layer control to the webmap (`layerControl.addTo(webmap);`)

#### Overlays.js

##### Add layer from GeoJSON file

1) Create an `overlays.js` file in `src/js` directory; it will store map overlay layers
2) We will add the Harrisburg Parks & Playgrounds layer via a GeoJSON file.  The data is available on [City of Harrisburg's Open Data Website](https://harrisburg-open-data-cohbg.opendata.arcgis.com/datasets/201e2a9538144b22b106ccd7d7d73846_0)
3) Import the `geoJSON` object from Leaflet (`import { geoJSON } from 'leaflet';`)
4) The geoJSON file is available at https://github.com/pmacMaps/build-maps-leaflet-parcel-gds23/blob/main/src/data/Harrisburg_Parks_Playgrounds.geojson
5) Use the `require` statement to reference the geojson file in the `src/data` directory.  The `parcel-transformer-geojson` library is required to package up this data type (`const parks_data = require('../data/Harrisburg_Parks_Playgrounds.geojson');`)
22) Create a variable for parks & playgrounds layer (`export const parks_playgrounds = geoJSON(parks_data, {style: function(feature) { return { color: '#ffffff', weight: 2, fillColor: '#0e5850', fillOpacity: 0.5 } } });`)
23) Add this layer to the `index.js` file by importing it (`import { parks_playgrounds } from './overlays.js';`)
24) Add the layer to the webmap (`parks_playgrounds.addTo(webmap);`)

##### Add layers from Esri REST Service

1) Import the `featureLayer` object from the Esri-Leaflet library. This allows use to use Esri REST services as a feature layer; (`import { featureLayer } from 'esri-leaflet';`)
2) We will be adding CAT bus routes and stops, as well as the Capital Area Greenwaybelt from a service managed by the City of Harrisburg.  Create a variable to reference the parent URL (`https://services5.arcgis.com/9n3LUAMi3B692MBL/arcgis/rest/services/Multimodal_Transportation_Map_WFL1/FeatureServer`)
3) Create a variable for the Capital Area Greenbelt (`export const greenbelt = featureLayer({url: `${hbg_parent_url}/5`,where: "Name = 'CAGA'"});`); notice we applied a definition query;
4) Import the greenbelt object into the `index.js` file (`import { greenbelt} from './overlays.js';`)
5) We will now see the Capital Area Greenbelt on the map with the default symbology of Leaflet; The Esri-Renderer's plugin can be used to utilize the symbology the Esri REST service was published with
6) Add the `style` property to the Greenbelt layer and apply a custom style
7) Create variables for CAT bus stops and routes; import then into index.js; add them to the webmap using the `addTo()` method (`export const bus_stops = featureLayer({url: `${hbg_parent_url}/3`});`) (`export const bus_routes = featureLayer({url: `${hbg_parent_url}/4`});`)
8) Stop Parcel; Let's install Esri Leaflet Renderers to use symbology for bus routes; (`npm i esri-leaflet-renderers`);
9) Restart Parcel, and import esri leaflet renderers in `overlays.js` file (`import 'esri-leaflet-renderers';`)
10) We will make the Bus Routes have a thicker line.  Set the style property: `style: function(feature) { return { weight: 4 }`
11) We will symbolize the Bus Stops using a custom icon; start by importing the `icon` and `marker` objects from leaflet (`import { icon, marker } from 'leaflet';`)
12) Create a variable to store the icon properties (`const bus_icon = icon({iconUrl: require('../data/bus-stop.png'), iconSize: [30,30] });`)
13) Use the `pointToLayer` method to return a `marker` using our bus stop icon (`pointToLayer: function (geojson, latlng) { return marker(latlng, { icon: bus_icon, alt: 'icon of a bus representing a CAT bus stop'})`)
14) We want our custom icon to symbolize the Bus Stops.  We must add `ignoreRenderer: true` to overwrite the style applied by the published REST service

##### Creating Overlay Map Control

1) In `overlays.js`, Create an object to reference map overlays (`export const map_overlays = { "Greenbelt Trail": greenbelt, "Parks & Playgrounds": parks_playgrounds, "Bus Stops": bus_stops, "Bus Routes": bus_routes }`)
2) In `mapControls.js`, import the map overlay object (`import { map_overlays } from './overlays.js';`)
3) In the `layerControl` variable, replace `null` with ` map_overlays`
4) Back at the map, you can now toggle the overlays on and off

##### Adding Pop-ups to Layers

Pop-ups can display attributes associated with each feature.  In Leaflet, you can create HTML mark-up to display pop-up content.  You can also reference fields in the data using the `L.Util.template` class.

Before using the template class, you can run functions to re-format the data in your popup.  You can constrict the number of decimal places, split strings, or even test for the presecne or absence of data for each record.

The completed code pop-ups is located at https://github.com/pmacMaps/build-maps-leaflet-parcel-gds23/blob/main/src/js/overlays.js.

Below is sample code:

```
bus_stops.bindPopup(function (layer) {
    let content = '<div>';
    content += '<h3 style="text-align:center">Bus Stop</h3>';
    content += '<p>Coordinates: {Latitude}; {Longitude}</p>';
    content += '<p>Location: {Descriptio}</p>';
    content += '</div>';
    return L.Util.template(content, layer.feature.properties);
});
```
