const Country  = ({country,latitude, longitude, setLatitude, setLongitude}) => {
    return (
      <article onClick={() => {
        setLatitude(country.latitude)
        setLongitude(country.longitude)
    }} >
        <p>{country.country}</p>
      </article>
    )
  }

export default Country
