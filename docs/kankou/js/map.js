var map;var hash;
	function ini(){
		map = L.map('map');
		L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
	}).addTo(map);
		hash = new L.Hash(map);
		var para = location.hash;
		var par = para.split("/");
		//var now = L.marker([par[1] ,par[2]]).addTo(map);
	}
