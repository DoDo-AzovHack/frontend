import { useState, useRef, useMemo, useCallback, useEffect, FC } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { observer } from 'mobx-react';
import MarkerPosStore from '../shared/store/MarkerPosStore';

const center = {
    lat: 51.505,
    lng: -0.09,
  }

const DraggableMarker = observer(() => {
    const { setMarkerPos } = MarkerPosStore

    const [ draggable, setDraggable ] = useState(true)
    const [ position, setPosition ] = useState(center)

    useEffect( () => {
        setMarkerPos(position.lat, position.lng)
        console.log(position.lat, position.lng)
    }, [ position, setMarkerPos ])

    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
            // setMarkerPos(position.lat, position.lng)
            // console.log(position.lat, position.lng)
          }
        },
      }),
      [],
    )
    // const toggleDraggable = useCallback(() => {
    //   setDraggable((d) => !d)
    // }, [])
  
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          {/* <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span> */}
        </Popup>
      </Marker>
    )
})


interface IMapProps {
  width: string
  height: string
  borderRadius: string
}

export const Map: FC<IMapProps> = observer(({ width, height, borderRadius }) => {
    // const { markerPos } = MarkerPosStore

    return (
        <div style={{
          display: "flex",
          flexDirection: "column",
        }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}
            style={{
              width,
              height,
              
              borderRadius,

              display: "flex",
              flexDirection: "column"
             }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DraggableMarker />
            </MapContainer>
            {/* { markerPos } */}
        </div>
    )
})
