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

__$styleInject("body{\n  padding: 0;\n  margin: 0;\n}\n\n#map {\n  position:absolute;\n  top:0;\n  bottom:0;\n  width:100%;\n}\n", undefined);

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F6aWxpY28iLCJhIjoiY2o1ZmRlNDE3MGVwMTJ3bnp3amljM2EyNyJ9.a4PkGcsyeqVEudMTnNG8QA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kazilico/cj5fjeg4m2d6e2rpezbgznnzk'
});

map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = features[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var f = _step.value;

            if (f.layer['source-layer'] == 'districts') console.log(f.layer);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
});

}(mapboxgl));
