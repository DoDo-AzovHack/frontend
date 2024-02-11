import { Link } from "react-router-dom"
import { Header } from "../../../shared/UIKit/Header"
import { LeftOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons"
import { Button, Input, Dropdown } from "antd"
import type { MenuProps } from 'antd';
import { checkAuth } from "../../../shared/tools/checkAuth"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import API from "../../../shared/API"


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
            <Link to="/events">
                <LeftOutlined />
                Назад
            </Link>

            <div>
                <Header
                    size="xx-large"
                    align="left"
                    innerText={`${ data.title }`}
                />
                <Dropdown.Button menu={ menuProps } />
            </div>
            

            {/* Photo */}
            <div style={{
                width: "385px",
                height: "212px",

                backgroundColor: "gray"
            }}>

            </div>

            {/* Yandex Maps API */}
            <div></div>

            {/* Description */}
            <div>
                <h3> Описание </h3>
                <p> { data.description } </p>
            </div>


            <h2> История действий </h2>
            <Input
                placeholder="Описание действия"
                type="text"

                value={ actionDesc || '' }
                onChange={ e => setActionDesc(e.target.value) }
            />
            <Button
                onClick={ () => {
                    API.CreateAction(eventNum, actionDesc)
                        .then(() => location.reload())
                    console.log(eventNum, actionDesc)
                    // setTimeout(() => location.reload(), 1000)
                } }
            >
                Создать действие
            </Button>
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
        </>
    )
}
