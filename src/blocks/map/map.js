var map;
  DG.then(function () {
    if (window.innerWidth >= 650) {
      map = DG.map('map', {
      center: [59.939014, 30.320971],
      zoom: 17});
    } else {
      map = DG.map('map', {
      center: [59.939352, 30.323414],
      zoom: 16});
    }
    var myIcon = DG.icon({
      iconUrl: 'img/icons/map-marker.png',
      iconRetinaUrl: 'img/icons/map-marker.png',
      iconSize: [231, 190],
      iconAnchor: [50, 190]
    });
      DG.marker([59.938635, 30.323118], {icon: myIcon}).addTo(map);
  });
