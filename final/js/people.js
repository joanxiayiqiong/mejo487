$( document ).ready(function() {
    loadPeopleSources();
});

function loadPeopleSources(){
    $.ajax({
            type:"GET",
            url:"people.json",
            dataType:"json",
            success: parsePeopleSources
});
}


function parsePeopleSources(peopledata){
  var html = "";
  var name = [];
  var company = [];
  var email = [];
  var gender = [];
  var sport = [];
  var about = [];
  var photo = [];

  for (var i = 0, len = peopledata.length; i < len; ++i) {
    name.push(peopledata[i]["name"]);
    company.push(peopledata[i]["company"]);
    email.push(peopledata[i]["email"]);
    gender.push(peopledata[i]["gender"]);
    sport.push(peopledata[i]["favoriteSport"]);
    about.push(peopledata[i]["about"]);
    photo.push(peopledata[i]["picture"]);

    html += '<ul style="border-bottom: 1px solid grey;"><img src="'+photo[i]+'" alt=""><li><h4>Name:</h4>'+ name[i] + '</li><li><h4>Company</h4>'+ company[i] + '</li><li><h4>Email:</h4>'+email[i]+'</li><li><h4>Gender:</h4>'+ gender[i] + '</li><li><h4>Favorite Sports: </h4>'+ sport[i] + '</li><li><h4>About: </h4>'+ about[i]+ '</li></ul>'
  }

  $("#personlist").html(html);


  var man = 0;
  var women = 0;
  var htmldata = "";
  for (var i = 0, len = peopledata.length; i < len; ++i) {
      if (gender[i] == "male") {
        man = man + 1;
      } else {
        women = women + 1;
      }
  }

  htmldata = '<p>Out of 6, there are <strong>' + man + '</strong> males and <strong>' +women + '</strong> females in the person list.</p>'
  $("#statement").html(htmldata);
}
