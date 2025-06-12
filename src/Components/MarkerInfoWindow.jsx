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
    const { lat, lng, descrip, idreport, } = location;
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
                        <h2 className='text-lg font-bold'>Reporte Folio ${idreport}</h2>
                        <a
                            href={`/reports/${idreport}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {idreport}
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