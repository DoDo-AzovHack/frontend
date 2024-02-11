import { FC, ReactElement, ReactNode } from "react"


interface IBoxProps {
    width: string
    height: string

    align: string

    children?: ReactElement[] | ReactNode
}


export const Box: FC<IBoxProps> = ({
    width,
    height,
    align,
    children
}) => {
    return (
        <div style={{
            width: `${ width }`,
            height: `${ height }`,

            display: "flex",
            flexDirection: "row",
            justifyContent: `${ align }`,
            alignItems: "center"
        }}
        >
            { children }
        </div>
    )
}
