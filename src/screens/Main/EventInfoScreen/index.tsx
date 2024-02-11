import { Link } from "react-router-dom"
import { Header } from "../../../shared/UIKit/Header"
import { LeftOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons"
import { Button, Input, Dropdown } from "antd"
import type { MenuProps } from 'antd';
import { checkAuth } from "../../../shared/tools/checkAuth"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import API from "../../../shared/API"
import { Map } from "../../Map";


export const EventInfoScreen = () => {
    const eventNum = Number(localStorage.getItem("currentEvent"))
    useEffect(() => checkAuth(null, true), [])

    const [ actionDesc, setActionDesc ] = useState<string>("")

    const { data, isLoading, isError } = useQuery(
        ['event'],
        () => API.GetEventOne(eventNum)
    )
    console.log(data)

    if (isLoading) {
        return <>Loading</>
    }

    if (isError) {
        return <>Error</>
    }


    // const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('click left button', e);
    // }
      
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
        if (e.key === '1') {
            API.ConfirmEvent(eventNum)
        }
        if (e.key === '2') {
            API.DeleteEvent(eventNum)
        }
    }

    const items: MenuProps['items'] = [
        {
          label: 'Одобрить',
          key: '1',
          icon: <CheckOutlined />,
        },
        {
          label: 'Удалить',
          key: '2',
          icon: <DeleteOutlined />,
          danger: true,
        }
      ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    }

    return (
        <>
            <div style={{
                marginTop: "1rem",
                marginLeft: "1rem",
            }}>
                <Link to="/events">
                    <LeftOutlined />
                    Назад
                </Link>
            </div>

            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Header
                    size="xx-large"
                    align="left"
                    innerText={`${ data.title }`}
                />
                <div>
                    <Dropdown.Button menu={ menuProps } style={{ marginRight: "1rem" }} />
                </div>
            </div>
            
            {/* Photo */}
            {/* <div style={{
                width: "385px",
                height: "212px",

                backgroundColor: "gray"
            }}> */}

            {/* </div> */}

            {/* Yandex Maps API */}
            <div style={{
                width: "100vw",
                height: "15rem",

                padding: "1rem"
            }}>
                <Map width="100%" height="15rem" borderRadius="1rem"/>
            </div>

            {/* Description */}
            <div style={{
                marginLeft: "1rem",
                marginTop: "2rem",
            }}>
                <h1 style={{ marginBottom: "0.5rem" }}> Описание </h1>
                <p> { data.description } </p>
            </div>


            <section style={{
                marginTop: "1rem",
                marginInline: "1rem"
            }}>
            <h1 style={{
                fontSize: "32px",
                marginBottom: "0.5rem"
            }}> История действий </h1>
            <Input
                placeholder="Описание действия"
                type="text"
                
                size="large"
                value={ actionDesc || '' }
                onChange={ e => setActionDesc(e.target.value) }
            />
            <Button
                style={{
                    width: "100%",
                    marginTop: "0.5rem",
                }}
                size="large"
                onClick={ () => {
                    API.CreateAction(eventNum, actionDesc)
                        .then(() => location.reload())
                    console.log(eventNum, actionDesc)
                    // setTimeout(() => location.reload(), 1000)
                } }
            >
                Создать действие
            </Button>
            {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore */}
            { data.actions.map(el => (
                <div style={{ paddingBottom: "1rem" }}>
                    <div>
                        {/* img */}
                        <div></div>
                        <p> { el.author.name } </p>
                    </div>
                    <p> { el.description } </p>
                </div>
            )) }
            </section>
        </>
    )
}
