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
- [Normalize.css](https://necolas.github.io/normalize.css/): Plugin to add standard CSS rules to web browser

## Set-up Project with NPM 
1. Open up `Command Prompt` application
2. Change to project directory using `cd {path/to/folder}` command
3. Initialize project using `npm init` command
4. Complete project initialization via command line
5. Type `yes` to complete initialization
   
You will now notice a `package.json` file in your project directory.  This file will contain a listing of project packages and other details for the development for your map application.

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
- `npm i normalize.css`

## Configure Parcel.js

We need to make a few changes to the `package.json` so that it can work with Parcel.js:
- add `"source": "src/index.html",` : this defines the entry point for Parcel. This is the file(s) that Parcel starts at when building your source code.
- add `"browserslist": "> 0.5%, last 2 versions, not dead",` : the browser list configuration is used to specify the target browsers that your code should support.  As written, our application should support browsers that have a global usage percentage greater than 0.5%, support the last 2 versions of web browsers, and excludes web browers that are no longer maintained (I used Chat-GPT to explain this property)
- add `"private": true,` : prevents NPM from publishing your project
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

We will also add a few directories (folders) in our project.  The structure will look like:

![parcel-map-project-folder-structure](https://github.com/pmacMaps/build-maps-leaflet-parcel-gds23/assets/12861454/10c4eed2-c05f-4e97-bd18-a0ea1e06b49c)

The `src` directory will contain the files we edit.  
The `dist` directory will containt the production-ready files we can deploy on a web server.

## Create Map Application

### Index.html

1) In the `src` directory, create a `index.html` file
2) In the `src` directory, creat a `js` directory
3) In the `src\js` directory, create an `index.js` file
4) In the `src` directory, create a `style.csc` file
5) With file open in VS Code, type `html`, and select `html:5` (pre-populates file)
6) Update the `title` element (i.e. "A Sample Webmap")
7) Within the `body` element, create `section` elements for heading block and webmap container
8) In the terminal or command prompt, type `npm run start` (click link or visit http://localhost:1234/ to preview website)
9) Within the heading `section` element, add an `h1` element; and add a `button` element
10) Before the closing `body` tag, add a `script` element; add a `type="module"` attribute; add a `src="./js/index.js"` attribute
11) Before the closing `head` tage, add `<link rel="stylesheet" href="style.css">`
