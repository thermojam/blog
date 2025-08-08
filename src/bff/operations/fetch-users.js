import {getUsers,} from "../api/index.js"
import {sessions} from "../sessions.js"
import {ROLE} from "../constants";


export const fetchUsers = async (userSession) => {
    const accessRoles = [ROLE.ADMIN]

    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: "Доступ запрещен",
            res: null,
        }
    }

    const users = await getUsers()

    return {
        error: null,
        res: users,
    }
};
