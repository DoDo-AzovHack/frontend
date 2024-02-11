import { Header } from "../../../shared/UIKit/Header"
import { Form } from "./form/Form"
import { useEffect } from "react"
import { checkAuth } from "../../../shared/tools/checkAuth"


export const CreateEventScreen = () => {
    useEffect(() => checkAuth(null, true), [])

    return (
        <>
            <Header
                size="xx-large"
                align="left"
                innerText="Создать"
            />

            <Form />
        </>
    )
}
