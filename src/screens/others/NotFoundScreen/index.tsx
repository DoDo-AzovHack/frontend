import styles from "./index.module.scss"
import { useNavigate } from "react-router-dom"


export const NotFoundScreen = () => {
    const navigate = useNavigate()

    return (
        <div className={ styles.page }>
            <h1 className={ styles.header }>
                Page not found
            </h1>

            <button
                className={ styles.button }
                onClick={ () => navigate(-1) }
            >
                Go back
            </button>
        </div>
    )
}
