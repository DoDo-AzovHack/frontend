import { useState } from "react"

import { Button, Dropdown, Space } from "antd"
import { DownOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd'


export const StatusFilter = () => {
    const [ tags, setTags ] = useState<string[]>([])

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e)
        setTags(tags)
    }

    const Tags: MenuProps['items'] = [
        {
            label: 'Проверено',
            key: '1',
        },
        {
            label: 'Не проверено',
            key: '2',
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
                    Статус
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}
