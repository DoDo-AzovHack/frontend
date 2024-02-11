import { useEffect } from "react"
import { checkAuth } from "../../../shared/tools/checkAuth"


export const AccountScreen = () => {
    useEffect(() => checkAuth(null, true), [])

    return (
        <>
        acc
        </>
    )
}
