import { Input, Button } from "antd"
import { useState } from "react"


export const SearchFilter = () => {
    const [ search, setSearch ] = useState<string>("")


    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Input
                // size="large"
                placeholder="E-Mail"
                type="email"

                value={ search || ''}
                onChange={ e => setSearch(e.target.value) }
            />
            <Button
                onClick={ () => {
                    localStorage.setItem("q", search)
                    location.reload()
                }}
            >
                Submit
            </Button>
        </div>
    )
}
