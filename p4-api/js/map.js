var map;
var cattale = {lat: 35.910375, lng: -79.062832};
var lounge = {lat: 34.047000, lng: -118.443083};
var town = {lat: 37.817711, lng: -122.263462};
var company = {lat: 39.771990, lng: -105.044181};
var java = {lat: 33.746799, lng: -84.374153};
var windy = {lat: 41.911009, lng: -87.671889};
var brook = {lat: 40.695469, lng: -73.996445};
var oh = {lat: 41.477626, lng: -81.682310};
var pa = {lat: 39.846926, lng: -75.714923};
var sc = {lat: 32.784930, lng: -79.933055};


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: cattale,
    zoom: 5
  });
  // marker
  var markercattale = new google.maps.Marker({position: cattale, map: map});
  var markerlounge = new google.maps.Marker({position: lounge, map: map});
  var markertown = new google.maps.Marker({position: town, map: map});
  var markercompany = new google.maps.Marker({position: company, map: map});
  var markerjava = new google.maps.Marker({position: java, map: map});
  var markerwindy = new google.maps.Marker({position: windy, map: map});
  var markerbrook = new google.maps.Marker({position: brook, map: map});
  var markeroh = new google.maps.Marker({position: oh, map: map});
  var markerpa = new google.maps.Marker({position: pa, map: map});
  var markersc = new google.maps.Marker({position: sc, map: map});


  var contentCatTale = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="font-size:22px;">Cat Tale at Chapel Hill</h1>'+
      '<div id="bodyContent">'+
      '<p>Cat Tales Cat Cafe is an aMEOWzing place to spend time in the company of adoptable cats. Our two story space on Franklin Street is home to 12 cats who are waiting for their perfect person. Guests 7 and older can get to know the cats in our cage-free comfortable lounge. The low stress, free roaming environment lets the kitties be themselves. Their true personalities shine which increases their chances of finding their perfect human match. It is a win for adopters, a win for the kitties, and a win for overburdened shelters!</p>'+
      '<p>Website: Cat Tale Chapel Hill, <a href="https://cattalescatcafe.com/">'+
      'https://cattalescatcafe.com/</a> '+
      '</p>'+
      '</div>'+
      '</div>';
  var infowindowcattale = new google.maps.InfoWindow({
    content: contentCatTale
  });
  markercattale.addListener('click', function() {
    infowindowcattale.open(map, markercattale);
  });

  var contentStringlounge = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="font-size:22px;">CatCafe Lounge LA</h1>'+
      '<div id="bodyContent">'+
      '<p>CatCafe Lounge prides itself on being the only nonprofit cat cafe in LA, and its mission is to reduce the euthanasia of shelter cats by helping them find forever homes. Visit the cafe to grab a drink or a small bite, then hang out with more than 30 adoptable kitties who are looking for some love and affection. They also offer party packages so you can reserve the place with friends and get the purr-babies all to yourselves.</p>'+
      '<p>Website: CatCafe Lounge LA, <a href="https://www.catcafelounge.com/">'+
      'https://www.catcafelounge.com/</a> '+
      '</p>'+
      '</div>'+
      '</div>';
  var infowindowlounge = new google.maps.InfoWindow({
    content: contentStringlounge
  });
  markerlounge.addListener('click', function() {
    infowindowlounge.open(map, markerlounge);
  });


  var contentStringtown = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="font-size:22px;">Cat Town at Oakland</h1>'+
      '<div id="bodyContent">'+
      '<p>At Cat Town, the care of the cats is impeccable, and each of them are up for adoption. Grab a treat and some coffee from RAWR Coffee Bar, then head into the "cat zone" to meet the felines. While reservations are highly encouraged for the cat zone, they also take walk-ins when space is available, so do not hesitate to stop in even if it is last minute.</p>'+
      '<p>Website: Cat Town, Oakland, CA <a href="https://www.cattownoakland.org/">'+
      'https://www.cattownoakland.org/</a> '+
      '</p>'+
      '</div>'+
      '</div>';
  var infowindowtown = new google.maps.InfoWindow({
    content: contentStringtown
  });
  markertown.addListener('click', function() {
    infowindowtown.open(map, markertown);
  });

  var contentStringcompany = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="font-size:22px;">Denver Cat Company</h1>'+
      '<div id="bodyContent">'+
      '<p>One of the first ever U.S. cat cafes, Denver Cat Company partners with several local rescue agencies and hosts around 15 fully adoptable cats in their facility at any given time — all of whom are ready to play and snuggle as you sip your coffee or tea. This place has WiFi, too, so you can literally bring your laptop and get work done while playing with more than a dozen cats. Talk about ideal working conditions.</p>'+
      '<p>Website: Denver Cat Company, CA <a href="https://www.denvercatco.com/">'+
      'https://www.denvercatco.com/</a> '+
      '</p>'+
      '</div>'+
      '</div>';
  var infowindowcompany = new google.maps.InfoWindow({
    content: contentStringcompany
  });
  markercompany.addListener('click', function() {
    infowindowcompany.open(map, markercompany);
  });

  var contentStringjava = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="font-size:22px;">Java Cats Cafe, GA</h1>'+
      '<div id="bodyContent">'+
      '<p>Java Cats Cafe is a cat cafe with an admirable mission: "To bring the citizens of Atlanta joy through the love of an adoptable cat, coffee, and food provided by homeless locals in the process of getting back on their feet." So by visiting, you are not only getting your much-desired cat fix — you are also supporting the local community and an organization that helps cats get adopted. It is a win-win.</p>'+
      '<p>Website: Java Cats Cafe — Atlanta, GA <a href="https://www.javacatscafe.com/cafe">'+
      'https://www.javacatscafe.com/cafe</a> '+
      '</p>'+
      '</div>'+
      '</div>';
  var infowindowjava = new google.maps.InfoWindow({
    content: contentStringjava
  });
  markerjava.addListener('click', function() {
    infowindowjava.open(map, markerjava);
  });

  var contentStringwindy = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="font-size:22px;">The Windy Kitty, IL</h1>'+
      '<div id="bodyContent">'+
      '<p>The Windy Kitty (based in the Windy City, of course) claims to be the "happiest place in Chicago" — and TBH, given that cats and coffee are involved, I fully believe them. In addition to their cafe full of adoptable rescue kitties, they also host fun events at the cafe like yoga and paint nights. Because everything is better with cats, and clearly they know it.</p>'+
      '<p>Website: The Windy Kitty — Chicago, IL <a href="https://www.windykittychicago.com/">'+
      'https://www.windykittychicago.com/</a> '+
      '</p>'+
      '</div>'+
      '</div>';
  var infowindowwindy = new google.maps.InfoWindow({
    content: contentStringwindy
  });
  markerwindy.addListener('click', function() {
    infowindowwindy.open(map, markerwindy);
  });

  var contentStringbrook = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" style="font-size:22px;">The Brooklyn Cat Cafe, New York</h1>'+
      '<div id="bodyContent">'+
      '<p>Touted as being the only nonprofit cat cafe in NYC, Brooklyn Cat Cafe offers patrons the dreamy experience of playing and bonding with adorably sweet kitties (all of whom are up for adoption!). They do not prepare fresh coffee, but they do sell packaged drinks, treats, and snacks, so you can still get your kitty fix and enjoy a beverage or bite to eat.</p>'+
      '<p>Website: The Brooklyn Cat Cafe, New York <a href="https://www.catcafebk.com/">'+
      'https://www.catcafebk.com/</a> '+
      '</p>'+
      '</div>'+
      '</div>';
  var infowindowbrook = new google.maps.InfoWindow({
    content: contentStringbrook
  });
  markerbrook.addListener('click', function() {
    infowindowbrook.open(map, markerbrook);
  });



    var contentStringoh = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" style="font-size:22px;">affoGATO Cat Cafe, OH</h1>'+
        '<div id="bodyContent">'+
        '<p>affoGATO Cat Cafe is brand spanking new — in fact, its grand opening will take place on Jan. 2, 2019, so add it to your list ASAP. This cat haven partners with a local animal rescue to house adoptable kitties, and they encourage patrons to come study, get work done, meet a friend, or just spend some solo time all while hanging with the cats in the cafe.</p>'+
        '<p>Website: affoGATO Cat Cafe — Cleveland, OH <a href="https://www.affogatocatcafe.com/">'+
        'https://www.affogatocatcafe.com/</a> '+
        '</p>'+
        '</div>'+
        '</div>';
    var infowindowoh = new google.maps.InfoWindow({
      content: contentStringoh
    });
    markeroh.addListener('click', function() {
      infowindowoh.open(map, markeroh);
    });

    var contentStringpa = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" style="font-size:22px;">Treetops Kitty Cafe — Kennett Square, PA</h1>'+
        '<div id="bodyContent">'+
        '<p>Treetops Kitty Cafe runs as a nonprofit and has helped find homes for more than 2,000 animals since they opened, so they are definitely worth your time. For a small fee, you are able to go mingle with the adoptable kitties and purchase a drink or snack. Plus, their shop offers a variety of fun, cat-themed merchandise, and you can even buy pet food here.</p>'+
        '<p>Website: Treetops Kitty Cafe — Kennett Square, PA<a href="https://www.treetopskittycafe.com/">'+
        'https://www.treetopskittycafe.com/</a> '+
        '</p>'+
        '</div>'+
        '</div>';
    var infowindowpa = new google.maps.InfoWindow({
      content: contentStringpa
    });
    markerpa.addListener('click', function() {
      infowindowpa.open(map, markerpa);
    });

    var contentStringsc = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" style="font-size:22px;">Pounce Cat Cafe + Wine Bar — Charleston, SC</h1>'+
        '<div id="bodyContent">'+
        '<p>Pounce Cat Cafe + Wine Bar serves up literally everything you could ever want while on vacation: cats, wine, and coffee. WOW. They partner with a local shelter, so all their cats are adoptable. If you book yourself a slot, you will be able to hang with the kitties commitment-free while you sip on a caffeinated or or alcoholic beverage of your choice.</p>'+
        '<p>Website: Pounce Cat Cafe + Wine Bar — Charleston, SC<a https://www.pouncecatcafe.com/charleston">'+
        'https://www.pouncecatcafe.com/charleston</a> '+
        '</p>'+
        '</div>'+
        '</div>';
    var infowindowsc = new google.maps.InfoWindow({
      content: contentStringsc
    });
    markersc.addListener('click', function() {
      infowindowsc.open(map, markersc);
    });
}
