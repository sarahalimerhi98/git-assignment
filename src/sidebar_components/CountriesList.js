import Country from "./Country";
import "./CountriesList.css";

const CountriesList = ({ searchResults, latitude, longitude, setLatitude, setLongitude}) => {

  const results = searchResults.map((country) => (
    <Country
      key={country.country}
      country={country}
      className="CountryItem"
      latitude={latitude} longitude={longitude}  setLatitude={setLatitude} setLongitude={setLongitude}
      
    />
  ));
  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No matching countries</p>
    </article>
  );

  return <div className="CountriesList">{content}</div>;
};
export default CountriesList;
