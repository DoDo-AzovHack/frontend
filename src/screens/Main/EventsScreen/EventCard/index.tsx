import { Link } from "react-router-dom"
import { useQuery } from "react-query"
import API from "../../../../shared/API"


export const EventCard = () => {
    const { data, isLoading, isError } = useQuery(
        ['persons'],
        () => API.GetEvents(
            localStorage.getItem("email"),
            localStorage.getItem("password")
        )
    )
    console.log(data)

    if (isLoading) {
        return <>Loading</>
    }

    if (isError) {
        return <>Error</>
    }

    return (
        <>
            {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
            { data.map(el => (
                <div>
                    <div
                    style={{
                        width: "1.5rem",
                        height: "1.5rem",

                        backgroundColor: `${ el.urgency }`
                    }}
                    ></div>
                    <div>
                        <Link
                            to="/eventInfo"
                            onClick={ () => localStorage.setItem("currentEvent", el.id) }
                        >
                            { el.title }
                        </Link>
                        <p> { el.description } </p>
                    </div>
                </div>
            )) }
        </>
    )
}
