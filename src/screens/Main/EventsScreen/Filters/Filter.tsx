import { Button, Flex } from "antd"
import { FilterOutlined } from "@ant-design/icons"
import { useState } from "react"
import { TagsFilter } from "./TagsFilter"
import { UrgencyFilter } from "./UrgencyFilter"
import { StatusFilter } from "./StatusFilter"


export const Filter = () => {
    const [ show, setShow ] = useState<boolean>(false)

    return (
    <Flex vertical>
        <Button onClick={ () => setShow(!show) } size="large">
            <FilterOutlined />
        </Button>
        {show && (
            <>
                <TagsFilter />
                <UrgencyFilter />
                <StatusFilter />
            </>
        )}
    </Flex>
    )
}
