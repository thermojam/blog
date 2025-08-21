import {addSession, getSession, deleteSession } from './api'

export const sessions = {

    create(user) {
        const hash = Math.random().toFixed(50);

        addSession(hash, user).then(r => {})

        return hash
    },

    async remove(hash) {
        const session = await getSession(hash);

        if (!session) {
            return;
        }

       await deleteSession(session.id)
    },

    async access(hash, accessRoles) {
        const dbSession = await getSession(hash)

        return !!dbSession.user && accessRoles.includes(dbSession.user.roleId);
    },
}
