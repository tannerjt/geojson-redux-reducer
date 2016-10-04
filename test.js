const geojson = require('./index.js');
const expect  = require('expect');
const createStore = require('Redux').createStore;


const testAddGeoJson = () => {
  var store = createStore(geojson);

  const geojsonBefore = {
    type : 'FeatureCollection',
    features : []
  };

  const geojsonAfter = {
    type : 'FeatureCollection',
    features : [
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [0, 1]},
        "properties": {"prop0": "value0"}
      }
    ]
  };

  Object.freeze(geojsonBefore);

  store.dispatch({
    type: 'ADD_FEATURE',
    geometry: {"type": "Point", "coordinates": [0, 1]},
    properties: {"prop0": "value0"}
  })

  expect(store.getState()).toEqual(geojsonAfter);
};

const testRemoveGeoJson = () => {
  const geojsonBefore = {
    type : 'FeatureCollection',
    features : [
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [0, 1]},
        "properties": {"prop0": "value0"}
      },
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [1, 2]},
        "properties": {"prop1": "value1"}
      },
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [3, 4]},
        "properties": {"prop2": "value2"}
      }
    ]
  };

  // this time create store with defined intial state
  var store = createStore(geojson, geojsonBefore);

  const geojsonAfter = {
    type : 'FeatureCollection',
    features : [
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [0, 1]},
        "properties": {"prop0": "value0"}
      },
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [3, 4]},
        "properties": {"prop2": "value2"}
      }
    ]
  };

  Object.freeze(geojsonBefore);

  store.dispatch({
    type: 'DELETE_FEATURE',
    index: 1
  });

  expect(store.getState()).toEqual(geojsonAfter);
};

testAddGeoJson();
testRemoveGeoJson();

console.log('All Tests Passed');
