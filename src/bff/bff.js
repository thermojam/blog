const generateDate = () => new Date(Math.random() * 1000000000000 + 1999999999).
    toISOString().substr(0, 16).
    replace('T', ' ');

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
    },

    async register(regLogin, regPassword) {
        const users = await fetch('http://localhost:3001/users')
            .then((loadedUsers) => loadedUsers.json(),)

        const user = users.find(({login}) => login === regLogin)

        if (user) {
            return {
                error: "Такой логин уже занят",
                res: null,
            }
        }

        await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                login: regLogin,
                password: regPassword,
                registed_at: generateDate(),
                role_id: 2,
            }),
        })

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
