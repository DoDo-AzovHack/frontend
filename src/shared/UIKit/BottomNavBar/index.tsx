import { Link } from "react-router-dom"


export const BottomNavBar = () => {
    return (
        <div style={{
            width: "100%",
            padding: "0.5rem",

            position: "fixed",
            bottom: "1rem",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",

            zIndex: 99,

            borderRadius: "1.5rem",
            backgroundColor: "rgba(217, 217, 217, 1)"
        }}
        // className="element-animation"
        >
            <Link to="/createEvent">
                <div style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "white",
                    borderRadius: "1rem",
                }}></div>
            </Link>

            <Link to="/events">
                <div style={{
                    flexGrow: 2,
                    backgroundColor: "white",
                    height: "3rem",
                    borderRadius: "1rem",
                }}>
                    asd
                </div>
            </Link>

            <Link to="/account">
            <div style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "white",
                    borderRadius: "1rem",
                }}></div>
            </Link>
        </div>
    )
}
