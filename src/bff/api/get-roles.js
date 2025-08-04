export const getRoles = async (loginToFind) =>
    fetch('http://localhost:3001/roles')
        .then((loadedRoles) => loadedRoles.json())

