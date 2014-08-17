
function initialize() {
  var myLatlng = new google.maps.LatLng(54.5798372,-3.7729136);
  var mapOptions = {
    zoom: 6,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'John Doe b. 1891'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);