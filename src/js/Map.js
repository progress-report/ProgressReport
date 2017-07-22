import mapboxgl from 'mapbox-gl';
import hover from './Hover';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F6aWxpY28iLCJhIjoiY2o1ZmRlNDE3MGVwMTJ3bnp3amljM2EyNyJ9.a4PkGcsyeqVEudMTnNG8QA';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kazilico/cj5fjeg4m2d6e2rpezbgznnzk',
});

let currentDistrict = {};
map.on('mousemove', function (e) {
    let features = map.queryRenderedFeatures(e.point);
    for(let f of features){
      if(f.layer['source-layer']=='districts'){
        if(currentDistrict!==f){
          hover(f);
          currentDistrict = f;
        }
      }
    }
});

export default map;
