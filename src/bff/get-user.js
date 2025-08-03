import { getUsers } from "./get-users.js"

export const getUser = async (login) => {
    const users = await getUsers()

    return users.find((user) =>
        user.login.toLowerCase() === login.toLowerCase()
    )
}
