//GeoJSON Reducer
//@author: Joshua Tanner
//@date: 10/3/2016

const initialState = {
  type: "FeatureCollection",
  features: []
};

const geojson = (state, action) => {
  if(!state) {
    return initialState;
  }

  switch(action.type) {
    case 'ADD_FEATURE':
      return Object.assign({}, state, {
        features: state.features.concat({
          type: 'Feature',
          geometry: Object.assign({}, action.geometry, {
            coordinates : action.geometry.coordinates.map(coord => {
              if( Array.isArray(coord) ) {
                return [].concat(coord)
              }
              return coord;
            })
          }),
          properties: Object.assign({}, action.properties)
        })
      });
    case 'DELETE_FEATURE':
      return Object.assign({}, state, {
        features: state.features
          .slice(0, action.index)
          .concat(state.features.slice(action.index + 1))
      });
    default:
      return state;
  }
}

module.exports = geojson;
