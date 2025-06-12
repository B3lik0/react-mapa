export const cambiarPorMunicipio = async (municipio, colonia = null) => {
    let address;
    try {
        if (colonia != null) address = `Yucatán,${municipio},${colonia}`;
        else address = `Yucatán,${municipio}`;
        const coords = await getNuevaUbicacion(address);
        return cambiarPorLatLng(coords);
    } catch (error) {
        console.error(error);
    }
};

export const getNuevaUbicacion = async (address = "") => {
    if (!address) return;
    try {
        const Geocoder = new google.maps.Geocoder();
        const results = await new Promise((resolve, reject) => {
            Geocoder.geocode({ address }, (results, status) => {
                if (status === "OK") {
                    resolve(results);
                } else {
                    reject(new Error(`No se localiza la localidad de ${address}`));
                }
            });
        });

        const location = results[0]?.geometry?.location;

        if (!location || typeof location.lat !== "function" || typeof location.lng !== "function") {
            console.error("La ubicación no tiene métodos lat() y lng():", location);
            throw new Error("Ubicación inválida retornada por el Geocoder");
        }

        const lat = location.lat();
        const lng = location.lng();

        return { lat, lng };
    } catch (error) {
        console.error(error.message);
    }
};

export const cambiarPorLatLng = (coords) => {
    try {
        let lat, lng, zoom;

        if (Array.isArray(coords)) {
            // Caso array: [lat, lng]
            lat = parseFloat(coords[0]);
            lng = parseFloat(coords[1]);
            zoom = 18;
        } else if (coords?.lat !== undefined && coords?.lng !== undefined) {
            // Caso objeto { lat, lng }
            lat = parseFloat(coords.lat);
            lng = parseFloat(coords.lng);
            zoom = 18;
        } else if (coords?.latLng) {
            // Caso event de click en mapa
            lat = coords.latLng.lat();
            lng = coords.latLng.lng();
            zoom = 14;
        } else {
            throw new Error("Formato de coordenadas no válido");
        }

        return { lat, lng, zoom };
    } catch (error) {
        console.error("Error en cambiarPorLatLng:", error.message);
    }
};
