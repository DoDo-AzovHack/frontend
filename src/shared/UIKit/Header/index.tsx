import { FC } from "react"


interface IHeaderProps {
    innerText?: string
    align: string
    size: string
}


export const Header: FC<IHeaderProps> = ({
    innerText,
    align,
    size
}) => {
    return (
        <h1
            style={{
                width: "100%",

                fontSize: `${ size }`,

                padding: "1rem",

                display: "flex",
                flex: "row",
                alignItems: "center",
                justifyContent: `${ align }`
            }}
        >
            { innerText }
        </h1>
    )
}