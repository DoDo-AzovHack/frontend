import { useState } from "react"

import { Button, Dropdown, Space } from "antd"
import { DownOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd'


export const UrgencyFilter = () => {
    const [ tags, setTags ] = useState<string[]>([])

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e)
        setTags(tags)
    }

    const Tags: MenuProps['items'] = [
        {
            label: 'Не срочно',
            key: '1',
        },
        {
            label: 'Срочно',
            key: '2',
        },
        {
            label: 'Очень срочно',
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
                    Срочность
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}
