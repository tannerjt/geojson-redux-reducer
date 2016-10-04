# redux-geojson

By: [TannerGeo](http://tannergeo.com)

This example module uses the Redux methodology to build a reducer that
allows for the addition and removal of features features from a GeoJSON
object.

Using Redux to manipulate a GeoJSON object can be helpful to enable undo and
redo capabilities when manipulating map features.  Since Redux stores
every state in an immutable object, you can trust that each step of adding
and removing features is preserved.

There are two main actions types to work with the reducer, preferably from a Redux store:
`ADD_FEATURE` and `REMOVE_FEATURE`
`

### Example Adding a Feature

```
var store = createStore(geojson);
store.dispatch({
  type: 'ADD_FEATURE',
  geometry: {"type": "Point", "coordinates": [0, 1]},
  properties: {"prop0": "value0"}
});
```

### Example Removing a Feature

```
var initialState = {
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

var store = createStore(geojson, geojsonBefore);

store.dispatch({
  type: 'DELETE_FEATURE',
  index: 1
});
```

#### To test the module
```
npm install
npm test
```

This module was created for learning purposes, but can easily be modified to
support additional actions and implemented into a larger project.

MIT License

Copyright (c) 2016 TannerGeo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
