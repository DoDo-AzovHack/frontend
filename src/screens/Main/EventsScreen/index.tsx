import { checkAuth } from "../../../shared/tools/checkAuth"
import { useEffect } from "react"
import { Header } from "../../../shared/UIKit/Header"
import { EventCard } from "./EventCard"
import { SearchFilter } from "./Filters/SearchFilter"
import { Filter } from "./Filters/Filter"


export const EventsScreen = () => {
    useEffect(() => checkAuth(null, true), [])


    return (
        <>
            <Header
                size="xx-large"
                align="left"
                innerText="Мероприятия"
            />
            
            <section style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Filter />
                <SearchFilter />
            </section>

            <EventCard />
        </>
    )
}
