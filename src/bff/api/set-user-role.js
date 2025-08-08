export const setUserRole = (userId, roleId) =>
    fetch(`http://localhost:3001/users/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            role_id: roleId,
        }),
    }).then((createdUser) => createdUser.json())
