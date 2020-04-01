API_KEY = "2a7a6e03114918d4754b99f8d6b3894b"

function getMap(){
    fetch(
        `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}`
    ).then(function(response){
        return response.json();
    });
    
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    var map = new kakao.maps.Map(container, options);
}

getMap();