# build-maps-leaflet-parcel-gds23
Guide to session at GeoDev Summit 2023

## Required Software
- Visual Studio Code ([download software](https://code.visualstudio.com/download)): used for writing code to build map application
- Node.js ([download software](https://nodejs.org/en/download/current)): used for adding libraries for map application

## Software Packages
### Development
- [Parcel.js](https://parceljs.org/): Build tool to package files into final application
- [Parcel GeoJSON Transformer](https://www.npmjs.com/package/parcel-transformer-geojson): Enables using GeoJSON data format with Parcel.js
### Standard
- [Leaflet.js](https://leafletjs.com/): Library to build interactive web maps
- [Leaflet Better Scale](https://github.com/daniellsu/leaflet-betterscale): Plugin to create an enhanced map scale bar
- [Leaflet Fullscreen](https://github.com/Leaflet/Leaflet.fullscreen): Plugin to allow map to go into fullscreen mode
- [Leaflet Locate Control](https://github.com/domoritz/leaflet-locatecontrol): Plugin to add a "locate me" widget to map
- [Leaflet Zoomhome](https://github.com/torfsen/leaflet.zoomhome): Plugin to add a zoom control with a default extent button
- [Esri Leaflet](https://github.com/Esri/esri-leaflet): Plugin to allow access to Esri REST services

## Set-up Project with NPM 
1. Open up `Command Prompt` application
2. Change to project directory using `cd {path/to/folder}` command
3. Initialize project using `npm init` command
4. Complete project initialization via command line
5. Type `yes` to complete initialization
   
You will now notice a `package.json` file in your project directory.  This file will contain a listing of project packages and other details for the development for your map application.

You can open your project in Visual Studio Code by right-clicking in the folder and selecting `Open with Code`. (note, Windows 11 requires you to select "Show more options" when right-clicking the folder.)

## Install NPM Packages

## Configure Parcel.js

## Create Map Application
### Sections of Map Application
