var map;var hash;var shise;

	function ini(){
		map = L.map('map');
		L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'}).addTo(map);
		hash = new L.Hash(map);
		var para = location.hash;
		var par = para.split("/");
		//var now = L.marker([par[1] ,par[2]]).addTo(map);
	}

	function k_ini(){
		map = L.map('map');
		L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'}).addTo(map);
		hash = new L.Hash(map);
		var back = L.easyButton('fa-undo', function(){
    			location.href = "../index.html#kankou";
		}).addTo( map );
		map.setView([35.6958, 139.7852], 12);

		shise = L.geoJson(shiseki, {onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(shise);
	}

	function sty(feature) {return feature.properties && feature.properties.style;}

	function iro(feature, latlng) {
	
		return L.marker(latlng, {icon: L.AwesomeMarkers.icon({icon: 'flag', prefix: 'fa', markerColor: 'darkblue'}) });

	}

	function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }

    if (feature.properties && feature.properties.setumei){
    	popup += '<br>概要：' + feature.properties.setumei;
    }

    layer.bindPopup(popup);
	}

