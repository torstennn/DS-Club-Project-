import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // <--- THIS IS THE MOST IMPORTANT LINE

function MapView() {
  return (
    <MapContainer
      center={[37.7749, -122.4194]} 
      zoom={13}
      style={{ height: '100%', width: '100%' }} // Tells Leaflet to fill its parent
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}

export default MapView;