//version 5.
var map;var p;var zoom;var marker; var markers = []; var gps_button; var hinanj;var marker1;
var todou ;var ido; var keido;

	function start(){
		map = L.map('map');
		L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  		}).addTo(map);
		gps_button = L.easyButton('fa-location-arrow', function(){ GPS();}).addTo( map );
		todou = L.geoJson(k, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tochigi_ini() {
		start();map.setView([36.673, 139.653], 8);
	}

    function gunma_ini() {
		start();map.setView([36.461, 138.950], 8);
	}

    function ibaragi_ini() {
		start();map.setView([36.271, 140.235], 8);
	}

    function tiba_ini() {
		start();map.setView([35.488, 139.966], 8);
	}

    function saitama_ini() {
		start();map.setView([35.929, 139.147], 8);
	}

    function tokyo_ini() {
		start();map.setView([35.595, 139.592], 8);
	}

    function kanagawa_ini() {
		start();map.setView([35.3980, 139.3314], 8);
	}


	function GPS(){
		if (navigator.geolocation) {
       	navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     	} else {
       	alert("エラーが発生したので、現在地を取得できませんでした。");
     	}
	}

	function gps_get(position) {

    //成功したら…
    ido = position.coords.latitude;
    keido = position.coords.longitude;
    
    //位置情報取得後、地図表示
   		map.setView([ido, keido], 17);
	//marker = L.marker([ido, keido]);
	//map.addLayer(marker);
	var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});
	
	marker1 = L.marker([ido, keido] ,{icon: pulsingIcon}).addTo(map);
	
	}

	function gps_error(error) {
   		//失敗したら…
       alert("エラーが発生したので、現在地を取得できませんでした。");
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

    if (feature.properties && feature.properties.kouzui){
    	popup += '<br>洪水：<span id = "pop_moji">' + feature.properties.kouzui + '</span>';
    }

    if (feature.properties && feature.properties.gake){
    	popup += '　がけ崩れ、土石流及び地滑り：<span id = "pop_moji">' + feature.properties.gake + '</span>';
    }

    if (feature.properties && feature.properties.takashio){
    	popup += '　高潮：<span id = "pop_moji">' + feature.properties.takashio + '</span>';
    }

    if (feature.properties && feature.properties.jishin){
    	popup += '　地震：<span id = "pop_moji">' + feature.properties.jishin + '</span>';
    }

    if (feature.properties && feature.properties.tsunami){
    	popup += '　津波：<span id = "pop_moji">' + feature.properties.tsunami + '</span>';
    }

    if (feature.properties && feature.properties.kaji){
    	popup += '　大規模な火事：<span id = "pop_moji">' + feature.properties.kaji + '</span>';
    }

    if (feature.properties && feature.properties.naisui){
    	popup += '　内水氾濫：<span id = "pop_moji">' + feature.properties.naisui + '</span>';
    }

    if (feature.properties && feature.properties.kazan){
    	popup += '　火山：<span id = "pop_moji">' + feature.properties.kazan + '</span>';
    }

    layer.bindPopup(popup);
	}

