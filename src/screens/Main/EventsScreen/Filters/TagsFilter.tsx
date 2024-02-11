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
            label: 'Пример 1',
            key: '1',
        },
        {
            label: 'Пример 2',
            key: '2',
        },
        {
            label: 'Пример 3',
            key: '3',
        },
    ]

    const menuProps = {
        items: Tags,
        onClick: handleMenuClick,
    }

    return (
        <Dropdown menu={ menuProps }>
            <Button>
                <Space>
                    Тэги
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}
