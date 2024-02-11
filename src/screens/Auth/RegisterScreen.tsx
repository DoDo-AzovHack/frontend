import { MailOutlined, KeyOutlined, UserOutlined, DownOutlined } from '@ant-design/icons'
import { Button, Input, Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'

import { Header } from '../../shared/UIKit/Header'
import { useState } from 'react'
import { Box } from '../../shared/UIKit/Box'
import { Link, useNavigate } from 'react-router-dom'
import API from '../../shared/API'
import { checkAuth } from '../../shared/tools/checkAuth'


export const RegisterScreen = () => {
    const navigate = useNavigate()

    checkAuth("/events", false)

    const [ name, setName ] = useState<string>("")
    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    const [ role, setRole ] = useState<number>(0)

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e)
        setRole(Number(role))
    }
      
    const roles: MenuProps['items'] = [
        {
            label: 'Городское управление',
            key: '1',
        },
        {
            label: 'Владелец недвижимости',
            key: '2',
        },
        {
            label: 'Эколог',
            key: '3',
        },
        {
            label: 'Активист',
            key: '4',
        },
        {
            label: 'Местный житель',
            key: '5',
        },
        {
            label: 'Турист',
            key: '6',
        },
    ]
      
    const menuProps = {
        items: roles,
        onClick: handleMenuClick,
    }


    return (
        <Box
            width="100%"
            height="100vh"
            align="center"
        >
            <section style={{
                    width: "25rem",
                    height: "7rem",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem"
                }}
            >
                <Header
                    innerText="Зарегистрироваться"
                    align="center"
                    size="xx-large"
                />

                <Input
                    size="large"
                    placeholder="Name"
                    type="username"
                    prefix={ <UserOutlined /> }

                    value={ name || ''}
                    onChange={ e => setName(e.target.value) }
                />
                <Input
                    size="large"
                    placeholder="E-Mail"
                    type="email"
                    prefix={ <MailOutlined /> }

                    value={ email || ''}
                    onChange={ e => setEmail(e.target.value) }
                />
                <Input
                    size="large"
                    placeholder="Password"
                    type="password"
                    prefix={ <KeyOutlined /> }

                    value={ password || ''}
                    onChange={ e => setPassword(e.target.value) }
                />

                <Dropdown menu={ menuProps } >
                    <Button>
                        <Space>
                            Роли
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>

                {/* <Dropdown menu={ menuProps } placement="bottomLeft" arrow>
                    <Button>bottomLeft</Button>
                </Dropdown> */}

                <Link to="/login">
                    Есть аккаунт? Войти
                </Link>

                <Button
                    onClick={ () => {
                        API.AuthRegister(name, email, password, role)
                            .then(() => navigate("/events"))
                            .catch(e => console.log(e))
                        console.log(name, email, password, role)
                        localStorage.setItem("email", email)
                        localStorage.setItem("password", password)
                    }}
                >
                    Зарегистрироваться
                </Button>
            </section>
        </Box>
    )
}
