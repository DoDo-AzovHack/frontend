import { useState } from "react"

import { Button, Dropdown, Space } from "antd"
import { DownOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd'


export const TagsFilter = () => {
    const [ tags, setTags ] = useState<string[]>([])

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e)
        setTags(tags)
    }

    const Tags: MenuProps['items'] = [
        {
            label: 'Море',
            key: '1',
        },
        {
            label: 'Пук',
            key: '2',
        },
        {
            label: 'Хз',
            key: '3',
        },
    ]

    const menuProps = {
        items: Tags,
        onClick: handleMenuClick,
    }

    return (
        <Dropdown menu={ menuProps } >
            <Button>
                <Space>
                    Тэги
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}
