import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker, GeoJSON, FeatureGroup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import { GeomanControls } from 'react-leaflet-geoman-v2';
import * as turf from '@turf/turf';
import { http } from '../services/api';
import { data } from 'autoprefixer';

const TurfUnion = () => {
    const [isUnionActive, setIsUnionActive] = useState(false);
    const [unionResult, setUnionResult] = useState(null);

    const geoJSON = {
        type: "FeatureCollection",
        features: []
    };

    const createPoligon = async()=> {
        try {
            const response = await http.post("/guardarGeoJSON", geoJSON)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const extraerGeo = (datos) => {
        // console.log(datos.geometry.coordinates);

        // Agregar las coordenadas a la colección de GeoJSON
        geoJSON.features.push({
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: datos.geometry.coordinates
            },
            properties: {
                // Puedes agregar propiedades adicionales aquí si es necesario
            }
        });

        // console.log(geoJSON);
        console.log(JSON.stringify(geoJSON, null, 2));
    };



    // const handleUnion = () => {
    //     const result = turf.union(poly1, poly2);
    //     setUnionResult(result);
    // };

    const handleDeactivateUnion = () => {
        setUnionResult(null);
        setIsUnionActive(false);
    };

    // const handleActivateUnion = () => {
    //     if (!isUnionActive) {
    //         // handleUnion();
    //         setIsUnionActive(true);
    //     }
    // };
    
    return (
        <div>
            <button onClick={()=> createPoligon()}>guardar</button>
            <MapContainer center={[-12.085233, -77.034245]} zoom={13} scrollWheelZoom={true} style={{ width: '100%', height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Marker de Ubicación */}
                <Marker position={[35.6, -82.55]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {/* GeoJSON para mostrar la unión de los polígonos */}
                {isUnionActive && unionResult && <GeoJSON data={unionResult} style={() => ({ color: '#f00' })} />}

                {/* Controles de dibujo */}
                <FeatureGroup>
                    <GeomanControls
                        options={{
                            position: 'topleft',
                            drawText: false,
                        }}
                        globalOptions={{
                            continueDrawing: true,
                            editable: false,
                        }}
                        onCreate={(e) => {
                            extraerGeo(e.layer.toGeoJSON());
                        }}
                    // onChange={(e) => console.log('onChange', e)}
                    />
                </FeatureGroup>
                {/* Botón para desactivar la unión */}
                {/* <button onClick={handleDeactivateUnion}>Desactivar Unión</button> */}
            </MapContainer>
        </div>
    );
}

export default TurfUnion;
