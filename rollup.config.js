import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  dest: 'main.js',
  format: 'iife',
  moduleName: 'progressreport',
  plugins: [
    postcss({ extensions: [ '.scss' ]} ),
    resolve(),
    babel({ exclude: 'node_modules/**' })
  ],
  external: ['mapbox-gl'],
  globals: {
    'mapbox-gl': 'mapboxgl'
  }
};
