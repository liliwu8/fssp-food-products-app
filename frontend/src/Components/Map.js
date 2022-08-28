import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import axios from 'axios'

const containerStyle = {
  width: '400px',
  height: '400px',
}
const API = process.env.REACT_APP_API_KEY

function Map() {
  const [place, setplace] = useState([])

  let location = 'Londen, England'

  useEffect(() => {
    axios
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: location,
          key: API,
        },
      })
      .then((res) => {
        setplace(res.data.results[0].geometry.location)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [location])

  const center = {
    lat: place.lat,
    lng: place.lng,
  }

  return center.lat && center.lng ? (
    <LoadScript googleMapsApiKey={API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker
          position={center}
          icon={
            'https://iconarchive.com/show/small-n-flat-icons-by-paomedia/map-marker-icon.html'
          }
        />
      </GoogleMap>
    </LoadScript>
  ) : null
}

export default Map
