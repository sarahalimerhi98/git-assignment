import { getCountries } from "./api/axios";
import { useState, useEffect } from "react";
import SearchField from "./sidebar_components/SearchField";
import Result from "./sidebar_components/Result";
import CountriesList from "./sidebar_components/CountriesList";

import "./SideBar.css";

function SideBar({latitude, longitude, setLatitude, setLongitude}) {
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getCountries()
      .then((json) => {
        setCountries(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  return (
    <div className="sideBar">
      <SearchField countries={countries} setSearchResults={setSearchResults} />
      <Result searchResults={searchResults} />
      <CountriesList searchResults={searchResults} latitude={latitude} longitude={longitude}  setLatitude={setLatitude} setLongitude={setLongitude} />
    </div>
  );
}

export default SideBar;
