import {getRoles,} from "../api/index.js"
import {sessions} from "../sessions.js"
import {ROLE} from "../constants";


export const fetchRoles = async (userSession) => {
    const accessRoles = [ROLE.ADMIN]

    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: "Доступ запрещен",
            res: null,
        }
    }

    const roles = await getRoles()

    return {
        error: null,
        res: roles,
    }
};
