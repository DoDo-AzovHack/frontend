// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck */
import { useState, useRef, useMemo, useEffect, FC, ReactNode } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { observer } from 'mobx-react';
import MarkerPosStore from '../shared/store/MarkerPosStore';
// import API from '../shared/API';

// let latitude = 0
// let longitude = 0


// navigator.geolocation.getCurrentPosition(position => {
//   latitude = position.coords.latitude
//   longitude = position.coords.longitude
// })
// API.GetEventOne()

const center = {
  lat: 47.200084,
  lng: 38.938626,
}

const DraggableMarker = observer(() => {
    const { setMarkerPos } = MarkerPosStore

    const [ draggable ] = useState(true)
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
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
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
  nonDragable?: boolean
  children?: ReactNode
}

export const Map: FC<IMapProps> = observer(({ width, height, borderRadius, nonDragable, children}) => {
    // const { markerPos } = MarkerPosStore

    return (
        <div style={{
          display: "flex",
          flexDirection: "column",
        }}>
            <MapContainer center={[47.200084, 38.938626]} zoom={ 15 } scrollWheelZoom={true}
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
                { nonDragable ? <></> : <DraggableMarker /> }
                { children }
            </MapContainer>
            {/* { markerPos } */}
        </div>
    )
})
