# React Mapa - Aplicación de Mapas Interactivos

Una aplicación React que permite visualizar mapas interactivos usando Google Maps API con funcionalidades de marcadores y geolocalización.

## Características

- 🗺️ Integración con Google Maps API
- 📍 Marcadores interactivos con ventanas de información
- 🎯 Funcionalidad de click en el mapa para agregar marcadores
- 📱 Diseño responsivo con Tailwind CSS
- 🔧 Configuración moderna con Vite

## Estructura del Proyecto

```
src/
├── Components/
│   ├── Map.jsx                 # Componente principal del mapa
│   ├── MarkerInfoWindow.jsx    # Componente de marcadores con ventanas de información
│   └── ExampleComponent.jsx    # Componente de ejemplo
├── utils/
│   └── MapaFunctions.js        # Funciones utilitarias para el mapa
├── App.jsx                     # Componente principal de la aplicación
├── main.jsx                    # Punto de entrada de la aplicación
└── index.css                   # Estilos globales con Tailwind CSS
```

## Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Google Maps API Key

1. Obtén una API key de Google Maps desde [Google Cloud Console](https://console.cloud.google.com/)
2. Habilita las siguientes APIs:
   - Maps JavaScript API
   - Geocoding API
3. Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
```

**⚠️ Importante:** Reemplaza `tu_api_key_aqui` con tu clave real de Google Maps API.

### 3. Ejecutar la aplicación

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/` (o el puerto que Vite asigne automáticamente).

## Componentes Principales

### Map.jsx
- Componente principal que renderiza el mapa de Google
- Permite hacer click para agregar marcadores
- Maneja zoom y centrado del mapa
- Soporta múltiples ubicaciones con marcadores

### MarkerInfoWindow.jsx
- Renderiza marcadores con ventanas de información
- Muestra detalles como folio único y descripción
- Enlaces navegables a reportes

### MapaFunctions.js
- `cambiarPorMunicipio()`: Convierte nombre de municipio a coordenadas
- `getNuevaUbicacion()`: Usa Geocoding API para obtener coordenadas
- `cambiarPorLatLng()`: Normaliza diferentes formatos de coordenadas

## Tecnologías Utilizadas

- **React 19.1.0** - Framework principal
- **Vite 6.3.5** - Herramienta de desarrollo
- **@vis.gl/react-google-maps 1.5.2** - Componentes de Google Maps para React
- **Tailwind CSS 4.1.7** - Framework de CSS utilitario
- **ESLint** - Linter para código JavaScript

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Solución de Problemas

### El mapa no se visualiza
1. Verifica que la API key esté correctamente configurada en `.env`
2. Asegúrate de que las APIs necesarias estén habilitadas en Google Cloud Console
3. Revisa la consola del navegador para errores de JavaScript
4. Confirma que no hay restricciones de dominio en la API key

### Errores de compilación
1. Verifica que todas las dependencias estén instaladas: `npm install`
2. Limpia la caché de node_modules si es necesario: `rm -rf node_modules && npm install`

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request
