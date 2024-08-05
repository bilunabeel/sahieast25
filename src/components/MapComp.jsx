import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const defaultCenter = {
    lat: 37.7749, // Latitude of your default center
    lng: -122.4194 // Longitude of your default center
  };

  return (
    <div className="h-96 w-full">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerClassName="h-full w-full"
          zoom={13}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapComponent;
