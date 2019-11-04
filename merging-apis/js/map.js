var map;
var chapelhill = {lat: 35.9132, lng: -79.0558};
var home = {lat: 35.932840, lng: -79.027940}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: chapelhill,
    zoom: 13
  });
  var marker = new google.maps.Marker({position: chapelhill, map: map});
  var markerhome = new google.maps.Marker({position: home, map: map});

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="font-size:22px;">Chapel Hill</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Chapel Hill</b>, a town in North Carolina. It is home to a campus of the University of North Carolina, which is known for its basketball team. The Ackland Art Museum exhibits European and Asian art. The North Carolina Botanical Garden has nature trails and themed gardens. The Morehead Planetarium & Science Center runs a program of live demonstrations. Franklin Street is lined with shops, restaurants and bars.</p>'+
      '<p>Attribution: Chapel Hill, <a href="https://en.wikipedia.org/wiki/Chapel_Hill,_North_Carolina">'+
      'https://en.wikipedia.org/wiki/Chapel_Hill,_North_Carolina</a> '+
      '</p>'+
      '</div>'+
      '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  var contentStringHome = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="font-size:22px;">Berkshire Chapel Hill</h1>'+
      '<div id="bodyContent">'+
      '<p>Take advantage of the urban convenience and local charm of Chapel Hill when you live at Berkshire. We’re close to Franklin Street, where you can stay connected and get in on home town action. Within the neighborhood you’ll find an array of shops and eateries, and Whole Foods Market is merely steps from your front door. Chapel Hill transit stops are nearby for convenient free fares to UNC. Experience local pride and community support when you come home to our Chapel Hill apartments.</p>'+
      '<p>Attribution: Berkshire Community, <a href="https://www.berkshirecommunities.com/apartments/nc/chapel-hill/berkshire-chapel-hill/">'+
      'https://www.berkshirecommunities.com/apartments/nc/chapel-hill/berkshire-chapel-hill/</a> '+
      '</p>'+
      '</div>'+
      '</div>';
  var infowindowHome = new google.maps.InfoWindow({
    content: contentStringHome
  });
  markerhome.addListener('click', function() {
    infowindowHome.open(map, markerhome);
  });
}
