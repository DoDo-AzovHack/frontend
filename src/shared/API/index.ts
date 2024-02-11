import axios from "axios"


const BASE_URL = import.meta.env.VITE_BASE_URL


export default class API {
    // Login
    public static AuthLogin = async (
        email: string | null,
        password: string | null
    ) => {
        const { data } = await axios
            .post(
                `${ BASE_URL }/auth/login`,
                {
                    email,
                    password
                }
            )

		return data
	}

    // Register
    public static AuthRegister = async (
        name: string,
        email: string,
        password: string,
        role: number
    ) => {
        const { data } = await axios
            .post(
                `${ BASE_URL }/auth/register`,
                {
                    name,
                    email,
                    password,
                    role
                }
            )
        
        return data
    }

    // Get events
    public static GetEvents = async (
        email: string | null,
        password: string | null,
    ) => {
        const { data } = await axios
            .post(
                `${ BASE_URL }/event/fetch`,
                {
                    auth: {
                        email,
                        password
                    },
                    params: {
                        page: localStorage.getItem("page") ? localStorage.getItem("page") : 1,
                        q: `${ localStorage.getItem("q") ? localStorage.getItem("q") : ""}`,
                        tags: localStorage.getItem("tags") ? localStorage.getItem("tags") : null,
                        urgency: localStorage.getItem("urgency") ? localStorage.getItem("urgency") : null,
                        status: localStorage.getItem("status") ? localStorage.getItem("status") : null,
                    }
                }
            )

        return data
    }

    // Get event one
    public static GetEventOne = async (event: number) => {
        const { data } = await axios
            .post(
                `${ BASE_URL }/event/fetch_one`,
                {
                    auth: {
                        email: localStorage.getItem("email"),
                        password: localStorage.getItem("password")
                    },
                    event
                }
            )

        return data
    }

    // Create event
    public static CreateEvent = async (
        title: string,
        description: string,
        tags: number[],
        location: string,
        urgency?: number
    ) => {
        const { data } = await axios
            .post(
                `${ BASE_URL }/event/create`,
                {
                    auth: {
                        email: localStorage.getItem("email"),
                        password: localStorage.getItem("password")
                    },

                    title,
                    description,
                    location,
                    tags,
                    urgency
                }
            )

        return data
    }

    // Delete event
    public static DeleteEvent = async (event: number) => {
        const { data } = await axios
            .post(
                `${ BASE_URL }/event/delete`,
                {
                    auth: {
                        email: localStorage.getItem("email"),
                        password: localStorage.getItem("password")
                    },
                    event
                }
            )

        return data
    }

    // Confirm event
    public static ConfirmEvent = async (event: number) => {
        const { data } = await axios
            .post(
                `${ BASE_URL }/event/confirm`,
                {
                    auth: {
                        email: localStorage.getItem("email"),
                        password: localStorage.getItem("password")
                    },
                    event
                }
            )

        return data
    }

    // Create action
    public static CreateAction = async (event: number, description: string) => {
        const { data } = await axios
            .post(
                `${ BASE_URL }/action/create`,
                {
                    auth: {
                        email: localStorage.getItem("email"),
                        password: localStorage.getItem("password")
                    },
                    description,
                    event
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )

        return data
    }

    // Get tags
    public static GetTags = async () => {
        const { data } = await axios
            .post(
                `${ BASE_URL }/tag/fetch/`,
                {
                    auth: {
                        email: localStorage.getItem("email"),
                        password: localStorage.getItem("password")
                    },
                }
            )

        return data
    }
}
