$.ajax({
    method: "GET",
    url: 'http://api.data.go.kr/openapi/child-prtc-zn-std',
    data: {
        serviceKey: 'I%2Bu5yBZvAbz%2FgetqfPM1BQ%2FEShTpdA%2FCmaJOCUCSzvtSfbvPtETYt57IJ54u%2FmsQZRRQOLY12xGLJ1R4qHppJg%3D%3D',
        s_page: 0,
        s_list: 1,
        type: 'json'
    },
    dataType: 'json',
    success: function(data){
         console.log(data);
    }
});

// const API_KEY = "I%2Bu5yBZvAbz%2FgetqfPM1BQ%2FEShTpdA%2FCmaJOCUCSzvtSfbvPtETYt57IJ54u%2FmsQZRRQOLY12xGLJ1R4qHppJg%3D%3D";

// function getData(){
//     fetch(
//         `http://api.data.go.kr/openapi/child-prtc-zn-std?ServiceKey=${API_KEY}`
//     ).then(function(response){
//         return response.json()
//     }).then(function(json){
//         console.log(json);
//     })
// }

// getData();


