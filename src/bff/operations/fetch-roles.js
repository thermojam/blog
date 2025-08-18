import {getRoles,} from "../api/index.js"
import {sessions} from "../sessions.js"
import {ROLE} from "../constants";


export const fetchRoles = async (hash) => {
    const accessRoles = [ROLE.ADMIN]

    const access = await sessions.access(hash, accessRoles)

    if (!access(hash, accessRoles)) {
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
