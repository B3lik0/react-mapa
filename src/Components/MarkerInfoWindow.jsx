import { useState } from 'react';
import {
    AdvancedMarker,
    InfoWindow,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

export const MarkerWithInfowindow = (location) => {
    const open = true;
    const [infowindowOpen, setInfowindowOpen] = useState(!open);
    const [markerRef, marker] = useAdvancedMarkerRef();
    const { lat, lng, descrip, foliounico, } = location;
    if (!lat || !lng) {
        console.error('Location must have lat and lng properties');
        return null;
    }
    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                onClick={() => setInfowindowOpen(open)}
                position={{ lat, lng }}
                title={'AdvancedMarker that opens an Infowindow when clicked.'}
            />
            {infowindowOpen && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={200}
                    onCloseClick={() => setInfowindowOpen(!open)}>
                    <div className='text-center text-black w-fit'>
                        <h2 className='text-lg font-bold'>Reporte Folio ${foliounico}</h2>
                        <a
                            href={`/reports/${foliounico}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {foliounico}
                        </a>
                        <p className='text-sm'>
                            {descrip}
                        </p>
                    </div>
                </InfoWindow>
            )}
        </>
    );
};