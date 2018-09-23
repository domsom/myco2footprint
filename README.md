# myco2footprint

**Available online: [http://myco2footprint.project23.de](http://myco2footprint.project23.de) // [Demo](http://myco2footprint.project23.de/show.html?data=eyJ0aXRsZSI6e30sInRvb2x0aXAiOnsidHJpZ2dlciI6ImF4aXMiLCJheGlzUG9pbnRlciI6eyJ0eXBlIjoiY3Jvc3MiLCJjcm9zc1N0eWxlIjp7ImNvbG9yIjoiIzk5OSJ9fX0sImxlZ2VuZCI6eyJkYXRhIjpbXX0sInhBeGlzIjp7InR5cGUiOiJjYXRlZ29yeSIsImRhdGEiOlsiMjAxOC85IiwiMjAxOC84IiwiMjAxOC83IiwiMjAxOC82IiwiMjAxOC81IiwiMjAxOC80IiwiMjAxOC8zIiwiMjAxOC8yIiwiMjAxOC8xIiwiMjAxNy8xMiIsIjIwMTcvMTEiLCIyMDE3LzEwIl0sImF4aXNQb2ludGVyIjp7InR5cGUiOiJzaGFkb3cifX0sInlBeGlzIjpbeyJ0eXBlIjoidmFsdWUiLCJuYW1lIjoia20iLCJtaW4iOjAsImF4aXNMYWJlbCI6eyJmb3JtYXR0ZXIiOiJ7dmFsdWV9IGttIn19LHsidHlwZSI6InZhbHVlIiwibmFtZSI6IkNPMiIsIm1pbiI6MCwiYXhpc0xhYmVsIjp7ImZvcm1hdHRlciI6Int2YWx1ZX0ga2cifX1dLCJzZXJpZXMiOlt7Im5hbWUiOiJDYXIiLCJ0eXBlIjoiYmFyIiwiZGF0YSI6WzY5OSw3OTYsMTExMiwxMTkxLDExNDMsMTYwNSw4MDYsODYxLDEwNjYsMTk2Myw5NjQsMF19LHsibmFtZSI6IlRyYWluIiwidHlwZSI6ImJhciIsImRhdGEiOlszNzksMzMyLDMwNywxNTQsODcsMTk5LDIzNCwxNjAsMjI3LDE1MCw5MSwwXX0seyJuYW1lIjoiQ08yIiwidHlwZSI6ImxpbmUiLCJ5QXhpc0luZGV4IjoxLCJkYXRhIjpbMTE4LjcyLDEyOS43MSwxNzIuNTYsMTc1LjE3LDE2NC43OCwyMzUuNjksMTI1LjcsMTI5LjI5LDE2MS43OCwyODIuOTksMTQwLDBdfSx7Im5hbWUiOiJBdmVyYWdlIENPMiIsInR5cGUiOiJsaW5lIiwieUF4aXNJbmRleCI6MSwiZGF0YSI6WzE2Ni45NCwxNjYuOTQsMTY2Ljk0LDE2Ni45NCwxNjYuOTQsMTY2Ljk0LDE2Ni45NCwxNjYuOTQsMTY2Ljk0LDE2Ni45NCwxNjYuOTQsMTY2Ljk0XX1dfQ)**

A tool for estimating your CO2 footprint from your Google [Location History](https://google.com/locationhistory).

It works directly in your web browser &ndash; no software to download, no packages to install. **Everyone deserves to know what data is being collected about them, without having to fiddle with cryptic pieces of software.**

*My CO2 Footprint* takes raw Google Takeout output and generates a graph of your monthly CO2 emissions for car & rail usage of the past 12 months.

## Packages used
* [leaflet.js](http://leafletjs.com/), for rendering the background map
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
