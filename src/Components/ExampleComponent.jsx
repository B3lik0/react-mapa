// example component
import React from 'react';

export default function ExampleComponent() {
    return (
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Componente de Ejemplo</h2>
            <p className="text-gray-700">
                Este es un componente de ejemplo que muestra cómo estructurar un componente en React.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Botón de Ejemplo
            </button>
        </div>
    );
}