// function getData(){
//     fetch(
//         "data.json"
//     ).then(function(response){
//         return response.json()
//     }).then(function(json){
//         console.log(json.position)
//     })
// }

// getData();

// var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div 
//     center : new kakao.maps.LatLng(37.376758, 126.788062), // 지도의 중심좌표 
//     level : 3 // 지도의 확대 레벨 
// });

// // // 마커 클러스터러를 생성합니다 
// const clusterer = new kakao.maps.MarkerClusterer({
//     map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
//     averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
//     minLevel: 5 // 클러스터 할 최소 지도 레벨 
// });

// // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
// $.get("/data2.json", function(data) { // 데이터에서 좌표 값을 가지고 마커를 표시합니다
//     // var imageSrc = 'icon1.png', imageSize = new kakao.maps.Size(50, 50), // 마커이미지 크기
//     //     imageOption = {offset: new kakao.maps.Point(27, 69)}; 
//     // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

//     var markers = $(data.position).map(function(i, position) {
//         return new kakao.maps.Marker({
//             position : new kakao.maps.LatLng(position.latitude,position.longitude)
//         });
//     });

//     // 클러스터러에 마커들을 추가합니다
//     clusterer.addMarkers(markers);
// });




