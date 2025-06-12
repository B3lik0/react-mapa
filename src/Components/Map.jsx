import { APIProvider, Map as GoogleMap, AdvancedMarker } from '@vis.gl/react-google-maps';
import { MarkerWithInfowindow } from './MarkerInfoWindow.jsx';
import { useState, useEffect } from 'react';
import { cambiarPorLatLng } from '../utils/MapaFunctions.js'
export default function Map({ zoom = 11, center = { lat: 20.9860167, lng: -89.711094 },
    locations = [], canMark, centerLocation, className = 'w-full h-[400px]', onLocationChange
}) {
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const [location, setLocation] = useState(null);
    const [newZoom, setNewZoom] = useState(zoom)
    const [mapCenter, setMapCenter] = useState(center);

    const handleZoomChanged = (event) => {
        const currentZoom = event.detail.zoom;
        setNewZoom(currentZoom);
    };

    const handleMapClick = async (event) => {
        if (!canMark) return;

        const lat = event.detail.latLng.lat;
        const lng = event.detail.latLng.lng;
        const data = cambiarPorLatLng({ lat, lng });
        const newLocation = { lat: data.lat, lng: data.lng };

        setLocation(newLocation);
        setNewZoom(11);

        if (onLocationChange) {
            onLocationChange(newLocation);
        }
    };

    useEffect(() => {
        const actualizarCentro = () => {
            if (centerLocation && centerLocation.center) {
                const data = cambiarPorLatLng(centerLocation.center);
                const newLocation = { lat: data.lat, lng: data.lng };

                setLocation(newLocation); // esto mueve el marcador
                setMapCenter(newLocation); // esto mueve el centro del mapa
                setNewZoom(centerLocation.zoom || 14);
            }
        };

        actualizarCentro();
    }, [centerLocation]);

    return (
        <div className={className}>
            <h1>Soy un mapa</h1>
            <APIProvider apiKey={API_KEY}>
                <GoogleMap
                    mapId={'bf51a910020fa25b'}
                    center={location || mapCenter}
                    zoom={newZoom}
                    onZoomChanged={handleZoomChanged}
                    // gestureHandling="greedy"
                    gestureHandling="auto"
                    onClick={handleMapClick}
                >
                    {locations.map((location, index) => (
                        <MarkerWithInfowindow key={index} {...location} />
                    ))}
                    {/* {location && (
                        <div className="mt-2 text-white">
                            Latitud: {location.lat.toFixed(6)}, Longitud: {location.lng.toFixed(6)}
                        </div>
                    )}
                    {location && (
                        <AdvancedMarker
                            position={{ lat: location.lat, lng: location.lng }}
                        />
                    )} */}
                    {location && <AdvancedMarker position={location} />}
                </GoogleMap>
            </APIProvider>
        </div>
    );
}
