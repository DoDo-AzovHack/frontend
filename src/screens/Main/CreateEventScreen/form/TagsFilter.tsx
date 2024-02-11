import { useEffect, useState } from "react"

import { Button, Dropdown, Space } from "antd"
import { DownOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd'
import API from "../../../../shared/API"
import { observer } from "mobx-react"
import TagsStore from "../../../../shared/store/TagsStore"


export const TagsFilter = observer(() => {
    const { setChoosedTags } = TagsStore

    const [ tags, setTags ] = useState<MenuProps['items']>([])

    useEffect(() => {
        API.GetTags()
            .then(res => setTags(res))
    }, [])

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        const choosedTagsArr = new Set<number>([])
        choosedTagsArr.add(Number(e.key))

        console.log(choosedTagsArr)
        console.log('click', e)

        setTags(tags)
        setChoosedTags(Array.from(choosedTagsArr))
    }

    const menuProps = {
        items: tags,
        onClick: handleMenuClick,
    }

    return (
        <Dropdown menu={ menuProps } placement="bottom">
            <Button size="large" style={{
                width: "100%",
                margin: "1rem 0 1rem 0"
            }}>
                <Space>
                    Тэги
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
})
