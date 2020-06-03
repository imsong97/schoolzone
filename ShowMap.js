const search = document.querySelector(".searchButton");
const address = document.querySelector(".searchInput")

function getMap(currentLat, currentLon){
    
    var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div 
        center : new kakao.maps.LatLng(currentLat, currentLon), // 지도의 중심좌표 
        level : 3 // 지도의 확대 레벨 
    });

    // // 마커 클러스터러를 생성합니다 
    const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 5 // 클러스터 할 최소 지도 레벨 
    });

    // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
    $.get("/data.json", function(data) { // 데이터에서 좌표 값을 가지고 마커를 표시합니다
        var imageSrc = 'warning.png', imageSize = new kakao.maps.Size(50, 50), // 마커이미지 크기
        imageOption = {offset: new kakao.maps.Point(25, 50)}; 
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        var markers = $(data.position).map(function(i, position) {
            return new kakao.maps.Marker({
                position : new kakao.maps.LatLng(position.latitude, position.longitude),
                image: markerImage
            });
        });

        // 클러스터러에 마커들을 추가합니다
        clusterer.addMarkers(markers);
    });

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

    search.addEventListener("click", getAddress(map));
}

function getAddress(map){
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address.value, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            marker.setMap(map);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } 
    });    
}

function init(){
    navigator.geolocation.getCurrentPosition(function(position) { //현재위치
        const currentLat = position.coords.latitude, // 위도
        currentLon = position.coords.longitude; // 경도
        getMap(currentLat, currentLon);
    });
}

init();


