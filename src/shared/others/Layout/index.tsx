import { Outlet } from "react-router-dom"
import { BottomNavBar } from "../../UIKit/BottomNavBar"
import { checkAuth } from "../../tools/checkAuth"
import { useEffect } from "react"

export const Layout = () => {
    useEffect(() => checkAuth(null, true), [])

    return (
        <>
            <Outlet />
            <BottomNavBar />
        </>
    )
}
