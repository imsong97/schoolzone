const inputData = document.getElementById("adress"),
    btnSearch = document.getElementById("search");

function getMap(currentLat, currentLon){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 

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


