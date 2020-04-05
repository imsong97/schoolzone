const inputData = document.getElementById("adress"),
    btnSearch = document.getElementById("search");

function getMap(currentLat, currentLon){
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(currentLat, currentLon),
        level: 3
    };
    var map = new kakao.maps.Map(container, options);

    //마커 표시
    var markerPosition  = new kakao.maps.LatLng(currentLat, currentLon); 
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);

    //지도타입
    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    //지도 확대축소
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT); 
}

function init(){
    navigator.geolocation.getCurrentPosition(function(position) { //현재위치
        
        const currentLat = position.coords.latitude, // 위도
        currentLon = position.coords.longitude; // 경도
        
        getMap(currentLat, currentLon);
        
    });
}

init();


