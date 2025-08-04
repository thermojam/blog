import {getUser} from "../api/get-user.js"
import {sessions} from "../sessions.js"

export const authorize = async(authLogin, authPassword) => {
    const user = await getUser(authLogin)

    if (!user) {
        return {
            error: "Такой пользователь не найден",
            res: null,
        }
    }

    if (authPassword !== user.password) {
        return {
            error: "Неверный пароль",
            res: null,
        }
    }

    return {
        error: null,
        res: {
            id: user.id,
            login: user.login,
            roleId: user.role_id,
            session: sessions.create(user)
        },
    }
};
