import {authorize, fetchUsers, fetchRoles, register, logout, updateUserRole} from './operations'



export const server = {
    authorize,
    register,
    logout,
    fetchUsers,
    fetchRoles,
    updateUserRole,
}
