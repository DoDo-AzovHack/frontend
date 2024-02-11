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
                style={{
                    marginLeft: 0
                }}
                size="large"
                placeholder="Название"
                type="email"

                value={ search || ''}
                onChange={ e => setSearch(e.target.value) }
            />
            <Button
                size="large"
                onClick={ () => {
                    localStorage.setItem("q", search)
                    location.reload()
                }}
            >
                Найти
            </Button>
        </div>
    )
}
