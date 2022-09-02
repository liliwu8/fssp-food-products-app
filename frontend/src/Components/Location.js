// import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'

// import { useEffect, useState } from 'react'
// import axios from 'axios'
// const API = process.env.REACT_APP_API_KEY

// const containerStyle = {
//   width: 'auto',
//   height: '600px',
// }
// function Location({ local }) {
//   const [place, setPlace] = useState([])

  // useEffect(() => {
  //   axios
  //     .get('https://maps.googleapis.com/maps/api/geocode/json', {
  //       params: {
  //        address: local,
  //         key: API,
  //       },
  //     })
  //     .then((res) => {
  //       setPlace(res.data.results[0].geometry.location)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  // console.log(place)
  
  // return (
    // <>
    //   <LoadScript googleMapsApiKey={API}>
    //     <GoogleMap
    //       mapContainerStyle={containerStyle}
    //       zoom={6}
    //       center={{ lat: place.lat, lng: place.lng }}
    //     >
    //       <MarkerF position={{ lat: place.lat, lng: place.lng }} />
    //     </GoogleMap>
    //   </LoadScript>
    // </>
  // )
// }

// export default Location
