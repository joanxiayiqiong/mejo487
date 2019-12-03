$( document ).ready(function() {
    loadtwitterData();
});



function loadtwitterData(){
  $.ajax({
    type:"GET",
    // url:"../twitter-bot/tweets.json",
    url:"https://www.googleapis.com/download/storage/v1/b/mejo487-api/o/tweets.json?alt=media",
    dataType:"json",
    success:parsetwitterData
  });
}

function parsetwitterData(data){
  console.log(data);
  // var html = "";
  var id=[];
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i]['id']);
    id.push(data[i]['id']);
  }

  for (var i = 0; i < id.length; i++) {
    var temp = id[i];
    twttr.widgets.createTweet(
        temp,
        document.getElementById("tweet-container"),
        {
          linkColor: "#55acee",
          align:"center"
        }
      );
  }
}
//
//   html += '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">' + text + '</p>';
//   html += '&mdash; ' + screenName + '</p>';
//
//
// twttr.widgets.createTweet(
//     "1196082088396677120",
//     document.getElementById("tweet-container"),
//     {
//       linkColor: "#55acee"
//     }
//   );

  // var tempPath = data["articles"];
  //
  // for (var i = 0; i < tempPath.length; i++) {
  //   articles.push(tempPath[i]);
  //   // console.log(articles[i]["title"]);
  //   // console.log(tempPath[i]["title"]);
  //   if (tempPath) {
  //
  //   }
  //   html += '<div><h3><a href="' + articles[i]["url"] + '">' + articles[i]["title"] + '</a></h3>'
  //   html += '<p>' + articles[i]["description"] + '</p></dive>'
  // }
  //
  // $("#twitter").html(html);
