import { deleteUser } from '../api'
import {ROLE} from "../constants/index.js"
import {sessions} from "../sessions.js"

export const removeUser = async (userSession, userId) => {
    const accessRoles = [ROLE.ADMIN]

    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: "Доступ запрещен",
            res: null,
        }
    }

    await deleteUser(userId)

    return {
        error: null,
        res: true,
    }
}
