import { Button } from "antd"
import { FilterOutlined } from "@ant-design/icons"
import { useState } from "react"
import { TagsFilter } from "./TagsFilter"
import { UrgencyFilter } from "./UrgencyFilter"
import { StatusFilter } from "./StatusFilter"


export const Filter = () => {
    const [ show, setShow ] = useState<boolean>(false)


    return (
        <>
            <Button onClick={ () => setShow(!show) }>
                <FilterOutlined />
            </Button>

            <div
                style={{
                    display: `${ show ? "flex" : "none" }`,
                    flexDirection: "column",
                    alignItems: "center",

                    // position: "absolute",
                    // left: 0,

                    height: "100vh",
                    width: "80vw",

                    backgroundColor: "F0F0F0"
                }}
            >
                <h3
                    style={{
                        color: "black"
                    }}
                >
                    Фильтры

                    urgency
                    status
                </h3>

                <TagsFilter />
                <UrgencyFilter />
                <StatusFilter />
            </div>
        </>
    )
}
