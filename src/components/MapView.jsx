import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Papa from 'papaparse';
import 'leaflet/dist/leaflet.css';

function MapView() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // Load the CSV file from the public folder
    Papa.parse('isla-vista-rentals.csv', {
      download: true,
      header: true, // Use the first row as keys (Price, Latitude, etc.)
      complete: (results) => {
        setRentals(results.data);
      },
    });
  }, []);

  return (
    <MapContainer center={[34.4133, -119.8610]} zoom={14} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {rentals.map((house, index) => (
        // Only render if it has valid coordinates
        house.latitude && house.longitude && (
          <Marker key={index} position={[parseFloat(house.latitude), parseFloat(house.longitude)]}>
            <Popup>
              <strong>{house.address || 'Rental'}</strong><br />
              Price: {house.price || 'Contact for price'}
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
}

export default MapView;