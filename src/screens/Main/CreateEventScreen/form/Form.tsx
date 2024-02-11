import { Button, Input } from "antd"
import { useState } from "react"
import API from "../../../../shared/API"
import { TagsFilter } from "./TagsFilter"
import { Map } from "../../../Map"
import MarkerPosStore from "../../../../shared/store/MarkerPosStore"
import { observer } from "mobx-react"
import TagsStore from "../../../../shared/store/TagsStore"
import styles from './Form.module.scss'


export const Form = observer(() => {
    const { choosedTags } = TagsStore
    const { markerPos } = MarkerPosStore

    const [ title, setTitle ] = useState<string>("")
    const [ desc, setDesc ] = useState<string>("")


    return (
        <div className={ styles.Form }>
            <label> Название </label>
            <Input
                size="large"
                placeholder="Название"
                type="text"

                value={ title || ''}
                onChange={ e => setTitle(e.target.value) }
            />

            <label> Описание </label>
            <Input
                size="large"
                placeholder="Описание"
                type="text"

                value={ desc || ''}
                onChange={ e => setDesc(e.target.value) }
            />
            
            <label> Фото </label>
            <Input
                size="large"
                type="file"
            />

            <TagsFilter />

            <div style={{
                width: "100vw",
                height: "15rem",

                padding: "1rem"
            }}>
                <Map width="100%" height="15rem" borderRadius="1rem"/>
            </div>

            <Button
                onClick={ () => {
                    API.CreateEvent(title, desc, choosedTags, markerPos, 1)
                }}
                size="large"
                style={{
                    width: "100%",
                    marginTop: "2rem"
                }}
            >
                Создать
            </Button>
        </div>
    )
})
