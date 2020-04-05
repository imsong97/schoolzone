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
        
        // 마커 클러스터러를 생성합니다 
        const clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
            minLevel: 3 // 클러스터 할 최소 지도 레벨 
        });

        // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
        $.get("data.json", function(data) { // 데이터에서 좌표 값을 가지고 마커를 표시합니다
            var imageSrc = 'icon1.png', imageSize = new kakao.maps.Size(50, 50), // 마커이미지 크기
                imageOption = {offset: new kakao.maps.Point(27, 69)}; 
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

            var markers = $(data).map(function(i) {
                return new kakao.maps.Marker({
                    position : new kakao.maps.LatLng(latitude,longitude)
                });
            });

            // 클러스터러에 마커들을 추가합니다
            clusterer.addMarkers(markers);
        });
    });
}

init();


