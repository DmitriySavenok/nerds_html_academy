var map;
  DG.then(function () {
      map = DG.map('map', {
          center: [59.939014, 30.320971],
          zoom: 17
      });
      var myIcon = DG.icon({
        iconUrl: '../img/icons/map-marker.png',
        iconRetinaUrl: '../img/icons/map-marker.png',
        iconSize: [231, 190],
        iconAnchor: [50, 190]
      });
      DG.marker([59.938635, 30.323118], {icon: myIcon}).addTo(map);
    });
