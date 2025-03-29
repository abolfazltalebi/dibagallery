import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [34.0810,-118.4112]; // تهران

const MapComponent = () => {
  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ height: "400px", width: "100%" ,borderRadius:"20px 20px 0px 20px"}}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Diba gallery!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
