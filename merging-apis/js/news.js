$( document ).ready(function() {
    loadData();
});



function loadData(){

    $.ajax({
            type:"GET",
            url:"https://newsapi.org/v1/sources",
            dataType:"json",
            success: parseData
});


}

function parseData(data){
  console.log(data);
  var sources = [];
  var tempPath = data["sources"];
  var html = "";
  for (var i = 0; i < tempPath.length; i++) {
    sources.push(tempPath[i]);
    // console.log(sources[i]['name']);
    // html += '<li><a href="#" onclick="loadArticles()"'+ sources[i]["name"]+'</a></li>';
    html += '<li class="nav-item"><a class="nav-link" href="#" onclick="loadArticles(\''  + sources[i]["id"] + '\')">' + sources[i]["name"] + '</a></li>'
  }

$("#sources-area").html(html);
}

function loadArticles(source){
  $.ajax({
    type:"GET",
    url:"https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=ead9c472446a47dda270e2c5efc6b2c7",
    dataType:"json",
    success:parseArticles
  });
}

function parseArticles(data){
  var html = "";
  var articles = [];
  var tempPath = data["articles"];

  for (var i = 0; i < tempPath.length; i++) {
    articles.push(tempPath[i]);
    // console.log(articles[i]["title"]);
    // console.log(tempPath[i]["title"]);
    if (tempPath) {

    }
    html += '<div><h3><a href="' + articles[i]["url"] + '">' + articles[i]["title"] + '</a></h3>'
    html += '<p>' + articles[i]["description"] + '</p></dive>'
  }

  $("#feed-area").html(html);

}



//https://newsapi.org/v1/articles?source=techcrunch&apiKey=b33a41de4be74829a057f2248c0a40dc
//b33a41de4be74829a057f2248c0a40dc
