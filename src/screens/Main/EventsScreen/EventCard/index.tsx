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
        <div style={{
            width: "100%",
            height: "50rem",

            overflowY: "scroll"
        }}>
            {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
            { data.map(el => (
                <div
                    style={{
                        backgroundColor: "lightgray",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        marginInline: "1rem",
                        padding: "1rem",
                    }}
                >
                    {/* { console.log("color", el.urgency.color) } */}
                    <div
                        style={{
                            width: "1.5rem",
                            height: "1.5rem",

                            borderRadius: "0.25rem",
                            marginBottom: "0.1rem",
                            backgroundColor: `#${ el.urgency.color }`
                        }}
                    ></div>
                    <div>
                        {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore */}
                        { el.tags.map(element => element.label) }
                    </div>
                    <div>
                        <Link
                            to="/eventInfo"
                            onClick={ () => localStorage.setItem("currentEvent", el.id) }
                        >
                            <h2 style={{

                            }}>
                                { el.title }
                            </h2>
                        </Link>
                        <p> { el.description } </p>
                    </div>
                </div>
            )) }
        </div>
    )
}
