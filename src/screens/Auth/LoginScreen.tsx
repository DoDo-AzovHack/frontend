import { MailOutlined, KeyOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { Header } from '../../shared/UIKit/Header'
import { useEffect, useState } from 'react'
import { Box } from '../../shared/UIKit/Box'
import { Link, useNavigate } from 'react-router-dom'

import API from '../../shared/API'
import { checkAuth } from '../../shared/tools/checkAuth'


export const LoginScreen = () => {
    const navigate = useNavigate()

    useEffect(() => checkAuth("/events", false), [])

    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
      

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
                    innerText="Войти"
                    align="center"
                    size="xx-large"
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

                <Link to="/register">
                    Нет аккаунта? Зарегистрироваться
                </Link>

                <Button onClick={ () => {
                    API.AuthLogin(email, password)
                        .then(() => navigate("/events"))
                        .catch(e => console.log(e))
                    console.log(email, password)
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                } }>
                    Войти в аккаунт
                </Button>
            </section>
        </Box>
    )
}
