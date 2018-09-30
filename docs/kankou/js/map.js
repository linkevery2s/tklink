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
		//hash = new L.Hash(map);
		map.setView([35.595, 139.592], 8);
		shise = L.geoJson(shiseki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(shise);
	}

	function sty(feature) {return feature.properties && feature.properties.style;}

	function iro(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
	}

	function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.Name) {
        popup = "名称：" + feature.properties.Name;
    }
    
    if (feature.properties && feature.properties.Jusho){
    	popup += '<br>住所：' + feature.properties.Jusho;
    }

    layer.bindPopup(popup);
	}

