import { Circle, FeatureGroup, LayerGroup, MapContainer, Popup, Rectangle, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import EstilosPopput from './EstilosPopput';
import EstilosPopput2 from './EstilosPopput2';


const Popups = () => {
    const center = [51.505, -0.09]
    const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    const fillBlueOptions = { fillColor: 'blue' }
    const fillRedOptions = { fillColor: 'red' }
    const greenOptions = { color: 'green', fillColor: 'green' }
    const purpleOptions = { color: 'purple' }
    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={true} className='w-screen h-screen'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
                <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
                <Circle
                    center={center}
                    pathOptions={fillRedOptions}
                    radius={100}
                    stroke={false}
                />
                <LayerGroup>
                    <Circle
                        center={[51.51, -0.08]}
                        pathOptions={greenOptions}
                        radius={100}
                    />
                </LayerGroup>
            </LayerGroup>
            <FeatureGroup pathOptions={purpleOptions}>
                <Popup>
                    <EstilosPopput />
                </Popup>
                <Circle center={[51.51, -0.06]} radius={200} />
            </FeatureGroup>
            <FeatureGroup pathOptions={purpleOptions}>
                <Popup>
                    <EstilosPopput2 />
                </Popup>
                <Rectangle bounds={rectangle} />
            </FeatureGroup>
        </MapContainer>
    )
}

export default Popups