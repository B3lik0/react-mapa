import Map from "./Components/Map.jsx";
export default function App() {
  const centerLocation = {
    center: { lat: 20.9860167, lng: -89.711094 },
    zoom: 11
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow p-4">
          <Map canMark={true} centerLocation={centerLocation} className="w-full h-[500px]" onLocationChange={(newLocation) => {
            console.log('Nueva ubicación:', newLocation);
          }} />
        </div>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 Mi Aplicación de Mapa</p>
        </footer>
      </div>
    </>
  )
}

