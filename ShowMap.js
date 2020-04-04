const inputData = document.getElementById("adress"),
    btnSearch = document.getElementById("search");

function getMap(){
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    var map = new kakao.maps.Map(container, options);

    //지도타입
    var mapTypeControl = new kakao.maps.MapTypeControl();

    //지도타입변경
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    //지도 확대축소
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}

getMap();