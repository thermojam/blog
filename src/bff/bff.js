export const server = {
    async authorize(authLogin, authPassword) {
        const users = await fetch('http://localhost:3001/users')
            .then((loadedUsers) => loadedUsers.json())

        const user = user.find(({login}) => login === authLogin)

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

        const session = {

            logOut() {
                Object.keys(session).forEach((key) => {
                    delete session[key];
                })
            },

            removeComment() {
                console.log('Удаление комментария')
            },
        }

        return {
            error: null,
            res: session,
        }
    }
}
