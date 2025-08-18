import {addSession, getSession, deleteSession} from "./api"

export const sessions = {
    async create(user) {
        const hash = Math.random().toString(36).slice(2)

        const session = {
            hash,
            user: {
                id: user.id,
                login: user.login,
                roleId: user.roleId,
            }
        }
        await addSession(session)

        return hash
    },

    async remove(hash) {
        const session = await getSession(hash)

        if (!session) {
            return
        }

        await deleteSession(session.id)
    },

    async access(hash, accessRoles) {
        const dbSession = await getSession(hash)
        if (!dbSession) return false
        return accessRoles.includes(dbSession.user.roleId)
    }
}
