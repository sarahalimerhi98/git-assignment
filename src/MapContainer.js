import React, { useRef } from "react";
import { loadModules } from "esri-loader";
import "./MapContainer.css";

const MapContainer = ({ latitude,longitude }) => {
  const MapElement = useRef(null);
  loadModules(
    [
      "esri/Map",
      "esri/views/MapView",
      "esri/widgets/BasemapToggle",
      "esri/widgets/Search",
      "esri/layers/FeatureLayer",
    ],
    {
      css: true,
    }
  ).then(([Map, MapView, BasemapToggle, Search, FeatureLayer]) => {
    const map = new Map({
      basemap: "hybrid",
    });
    //Trails feature layer (lines)
    const trailsLayer = new FeatureLayer({
      url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Countries/FeatureServer/0",
    });

    map.add(trailsLayer, 0);
    // Create the MapView and reference the Map in the instance
    const view = latitude && longitude
      ? new MapView({
          container: MapElement.current,
          map: map,
          center: [longitude, latitude],
          zoom: 8,
        })
      : new MapView({
          container: MapElement.current,
          map: map,
          zoom: 2,
        });

    // 1 - Create the widget
    const toggle = new BasemapToggle({
      // 2 - Set properties
      view: view, // view that provides access to the map's 'hybrid' basemap
      nextBasemap: "topo-vector", // allows for toggling to the 'topo-vector' basemap
    });

    // Add widget to the top right corner of the view
    view.ui.add(toggle, "top-right");
  });

  return (
    <div className="mapContainer">
      <div className="mapVew" ref={MapElement}></div>
    </div>
  );
};

export default MapContainer;
