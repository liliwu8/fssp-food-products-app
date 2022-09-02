// import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Location from './Location'
// // const API = process.env.REACT_APP_API_KEY
// const API = process.env.REACT_APP_API_URL

// const containerStyle = {
//   width: 'auto',
//   height: '600px',
// }

// function Map() {
  // const [place, setPlace] = useState([])

  // let location = 'England, London'

  // const [food, setFood] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(`${API}/foods`)
  //     .then((res) => {
  //       setFood(res.data.payload)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [])
  // let one = food.map((fo) => fo.location).slice(0,2)
  //    return (
  //      <div>
  //        {food.map((fo) => {
  //          return fo.location
  //        })}
  //      </div>
  //    )
  // useEffect(() => {
  //   axios
  //     .get('https://maps.googleapis.com/maps/api/geocode/json', {
  //       params: {
  //         address: food[0].location,
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

  // return (
    // <>
    //    {one &&
    //     one.map((fo, index) => {
    //       return <Location local={fo} key={index} />
    //     })} 
    //    {one && <Location local={one} />}
    // </> 
  // )

  // return (
  //   <LoadScript googleMapsApiKey={API}>
  //     <GoogleMap
  //       mapContainerStyle={containerStyle}
  //       zoom={6}
  //       center={{ lat: place.lat, lng: place.lng }}
  //     >
  //       <MarkerF position={{ lat: place.lat, lng: place.lng }} />
  //     </GoogleMap>
  //   </LoadScript>
  // )
// }

// export default Map

//   return center.lat && center.lng ? (
//     <LoadScript googleMapsApiKey={API}>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
//         <Marker
//           position={center}
//           icon={
//             'https://iconarchive.com/show/small-n-flat-icons-by-paomedia/map-marker-icon.html'
//           }
//         />
//       </GoogleMap>
//     </LoadScript>
//   ) : null
