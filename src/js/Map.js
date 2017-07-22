import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F6aWxpY28iLCJhIjoiY2o1ZmRlNDE3MGVwMTJ3bnp3amljM2EyNyJ9.a4PkGcsyeqVEudMTnNG8QA';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kazilico/cj5fjeg4m2d6e2rpezbgznnzk',
});

console.log(map);

export default map;
