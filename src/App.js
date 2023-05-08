import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import MapContainer from "./MapContainer";

function App() {
  const [latitude, setLatitude] = useState("33.8333");
  const [longitude, setLongitude] = useState("35.8333");

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideBar
          latitude={latitude}
          longitude={longitude}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
        <MapContainer
          latitude={latitude}
          longitude={longitude}
        />
      </div>
    </div>
  );
}

export default App;
