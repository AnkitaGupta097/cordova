

document.addEventListener('deviceready', getWeatherLocation);

function getWeatherLocation() {

    navigator.geolocation.getCurrentPosition(onWeatherSuccess, onWeatherError, { enableHighAccuracy: true });
}
function onWeatherSuccess(position) {
    var locationElement = document.getElementById("location");
    var value = 'Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n';
    locationElement.innerHTML = value;
}
function onWeatherError(error) {
    alert(error);

}