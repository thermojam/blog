import {register} from "../operations/index.js"

export const getUser = async (loginToFind) =>
    fetch(`http://localhost:3001/users?login=${loginToFind}`)
        .then((loadedUser) => loadedUser.json(),)
        .then(([loadedUser]) => loadedUser && ({
            id: loadedUser.id,
            login: loadedUser.login,
            password: loadedUser.password,
            registeredAt: loadedUser.registeredAt,
            roleId: loadedUser.role_id,
        }));
