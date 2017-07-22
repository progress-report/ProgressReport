(function (mapboxgl) {
'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

mapboxgl = mapboxgl && mapboxgl.hasOwnProperty('default') ? mapboxgl['default'] : mapboxgl;

__$styleInject("#map {\n  position:absolute;\n  top:0;\n  bottom:0;\n  width:100%; \n}\n", undefined);

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F6aWxpY28iLCJhIjoiY2o1ZmRlNDE3MGVwMTJ3bnp3amljM2EyNyJ9.a4PkGcsyeqVEudMTnNG8QA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kazilico/cj5fjeg4m2d6e2rpezbgznnzk'
});

console.log(map);

}(mapboxgl));
