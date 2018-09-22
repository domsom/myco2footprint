# myco2footprint

**Available online: [locationhistoryvisualizer.com/heatmap/](https://locationhistoryvisualizer.com/heatmap/)**

A tool for estimating your CO2 footprint from your Google [Location History](https://google.com/locationhistory).

It works directly in your web browser &ndash; no software to download, no packages to install. **Everyone deserves to know what data is being collected about them, without having to fiddle with cryptic pieces of software.**

*My CO2 Footprint* takes raw Google Takeout output and generates a graph of your monthly CO2 emissions for car & rail usage of the past 12 months.

## Packages used
* [leaflet.js](http://leafletjs.com/), for rendering the background map
* [leaflet.heat](https://github.com/Leaflet/Leaflet.heat), for rendering the heatmap overlay
* [filestream](https://github.com/DamonOehlman/filestream), for dealing with gigantic Google Takeout files
* [oboe.js](http://oboejs.com), for processing said gigantic files
* [browserify](http://browserify.org/), for helping filestream  work properly in the browser
* [echarts.js](https://ecomfe.github.io/echarts-doc/public/en/index.html), for creating the graph


## License

Copyright (C) 2018 Dominik Sommer <dominik@sommer.name>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
