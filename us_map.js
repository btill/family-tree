
function initialize() {
  var cLatlng = new google.maps.LatLng(40.5669396,-96.1044528);
  var myLatlng = new google.maps.LatLng(33.777650, -118.042876);
  var mapOptions = {
    zoom: 5,
    center: cLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker1 = new google.maps.Marker({
      position: cLatlng,
      map: map,
      title: 'John Doe b. 1891'
  });
  var marker2 = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Brendan Till b. 1986'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);