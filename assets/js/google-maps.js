function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -3.2860428, lng: 114.5728889};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Kalimantan, INA' // Title Location
    });
}