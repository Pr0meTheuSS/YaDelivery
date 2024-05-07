// import React from 'react';
// import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const position = [54.842072, 83.0926071]

// const GeolocationPage = () => {
//   const iconPerson = new L.Icon({
//     iconUrl: '../assets/base-shop-image.png',
//     iconRetinaUrl: '../assets/base-shop-image.png',
//     iconAnchor: null,
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     iconSize: new L.Point(60, 75),
//     className: 'leaflet-div-icon'
// });

// return (
//       <MapContainer center={position} zoom={13} scrollWheelZoom={true}  style={{height: '50vh', width: '90vw'}}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position} icon={iconPerson}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//   )
// }

// export default GeolocationPage;
