import API from "../API"


export const checkAuth = (path: string | null, redirect: boolean) => {
    API.AuthLogin(localStorage.getItem("email"), localStorage.getItem("password"))
        .then(() => {
            if (path) location.pathname = path
        })
        .catch(e => {
            console.log(e)
            if (redirect) location.pathname = "/login"
        })
}
