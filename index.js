var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F6aWxpY28iLCJhIjoiY2o1ZmRlNDE3MGVwMTJ3bnp3amljM2EyNyJ9.a4PkGcsyeqVEudMTnNG8QA';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/light-v9'
});
