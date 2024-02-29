import React from 'react';
import { Box } from '@mui/material';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const GoogleMapComponent = ({ height, width, lat, lng }) => {
  const mapContainerStyle = {
    width: width || '100%',
    height: height || '100vh',
  };

  const center = {
    lat: +lat || 23.0225,
    lng: +lng || 72.5714,
  };

  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '';

  return (
    <>
      <Box sx={{ p: 1 }}>
        <LoadScript googleMapsApiKey={googleApiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </Box>
    </>
  );
};

export default GoogleMapComponent;
