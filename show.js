( function ( $, L, prettySize ) {
	var map;
	var showData;

	function status( message ) {
		$( '#currentStatus' ).text( message );
	}
	// Start at the beginning
	stageOne();

	function stageOne () {
		// Parse passed data
		showData = findGetParameter('data');
		if (showData == null) {
			window.location = 'index.html';
		}
		showData = atob(showData);

		// Initialize the map
		map = L.map( 'map' ).setView( [0,0], 2 );
		L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'My CO2 Footprint is open source and available <a href="https://github.com/domsom/myco2footprint">on GitHub</a>. Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors.',
		} ).addTo( map );

		stageThree(0);
	}

	function stageThree ( numberProcessed ) {
	    gtag('event', 'MyCO2Footprint', 'resultGraphShow', undefined, numberProcessed);

		var $done = $( '#done' );

		// Draw result chart
		var resultChart = echarts.init(document.getElementById('resultchart'));
		var option = JSON.parse(showData);
		resultChart.setOption(option);
	}

	function findGetParameter(parameterName) {
		var result = null,
			tmp = [];
		var items = location.search.substr(1).split("&");
		for (var index = 0; index < items.length; index++) {
			tmp = items[index].split("=");
			if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
		}
		return result;
	}

}( jQuery, L, prettySize ) );
