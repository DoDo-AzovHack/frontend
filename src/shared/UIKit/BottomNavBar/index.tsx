import { Link } from "react-router-dom"


export const BottomNavBar = () => {
    return (
        <div style={{
            width: "100%",
            padding: "1rem",

            position: "absolute",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",

            backgroundColor: "D9D9D9"
        }}>
            <Link to="/createEvent">
                <div style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "red"
                }}></div>
            </Link>

            <Link to="/events">
                <div style={{
                    flexGrow: 2,
                    backgroundColor: "red"
                }}>asd</div>
            </Link>

            <Link to="/account">
            <div style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "red"
                }}></div>
            </Link>
        </div>
    )
}
