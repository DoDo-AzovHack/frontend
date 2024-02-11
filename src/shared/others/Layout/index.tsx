import { Outlet } from "react-router-dom"
import { BottomNavBar } from "../../UIKit/BottomNavBar"

export const Layout = () => {
    return (
        <>
            <Outlet />
            <BottomNavBar />
        </>
    )
}
