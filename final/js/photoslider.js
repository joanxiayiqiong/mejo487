$( document ).ready(function() {
    // createCharts();
    loadData();

});

function loadData(){
  $.ajax({
    type:"GET",
    url:"https://www.googleapis.com/download/storage/v1/b/teaching-api/o/photos.json?generation=1576123660992318&alt=media",
    dataType:"JSON",
    success:parseData
  });
}

function parseData(data){
  var html = "";
  console.log(data);
  var imagepath = [];
  var captions = [];
  var credits = [];
  var tempPath = data["photo-gallery"]["images"];


  for (var i = 0; i < 3; ++i) {
    imagepath.push(tempPath.image[i]["image-path"]);
    captions.push(tempPath.image[i]["caption"]);
    credits.push(tempPath.image[i]["credit"]);

  }
  html += '<div class="carousel-item active"><img class="d-block w-100" src="' + imagepath[0] + '" alt="First slide"><div class="carousel-caption d-none d-md-block"><h5>'+ captions[0] +'</h5><p>'+ credits[0] +'</p></div></div>';
  html += '<div class="carousel-item"><img class="d-block w-100" src="' + imagepath[1] + '" alt="First slide"><div class="carousel-caption d-none d-md-block"><h5>'+ captions[1] +'</h5><p>'+ credits[1] +'</p></div></div>';
  html += '<div class="carousel-item"><img class="d-block w-100" src="' + imagepath[2] + '" alt="First slide"><div class="carousel-caption d-none d-md-block"><h5>'+ captions[2] +'</h5><p>'+ credits[2] +'</p></div></div>';
  $("#slider").html(html);

}
