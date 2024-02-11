import { Marker } from "react-leaflet"
import API from "../../../shared/API"
import { Map } from "../../Map"
import { useEffect, useState } from "react"


export const AllEventsMapScreen = () => {
    const [ markers, setMarkers ] = useState([])

    useEffect(() => {
        API.GetEvents(
            localStorage.getItem("email"),
            localStorage.getItem("password")
        )
        .then(res => {
            console.log(res)
            setMarkers(res)
        })
    }, [])


    console.log("markers", markers)
    return (
        <>
            <Map
                width="100vw"
                height="100vh"
                borderRadius="0"
                nonDragable
            >
                {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */
                    markers.map(el => <Marker key={ el.id } position={el.location} />)
                }
            </Map>
        </>
    )
}
