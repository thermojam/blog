export const getSession = async (hash) => {
    const res = await fetch(`http://localhost:3001/sessions?hash=${hash}`)
    const sessions = await res.json()

    if (!sessions.length) return null

    const [dbSession] = sessions

    return {
        id: dbSession.id,
        hash: dbSession.hash,
        user: {
            id: dbSession.user.id,
            login: dbSession.user.login,
            roleId: Number(dbSession.user.roleId),
        },
    }
}
