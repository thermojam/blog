import styled from "styled-components"
import {H2} from "../../components/index.js"
import {UserRow, TableRow} from "./components/index.js"
import { server } from "../../bff/index.js"
// import {useDispatch} from "react-redux"
// import {ROLE} from '../../../../constants'


const UsersContainer = ({className}) => {
    // const dispatch = useDispatch();
    const roles = server.fetchRoles()
    const users = [];

    return (
        <div className={className}>
            <H2>Пользователи</H2>
            <div>
                <TableRow>
                    <div className="login-column">Логин</div>
                    <div className="registered-at-column">Дата регистрации</div>
                    <div className="role-column">Роль</div>
                </TableRow>
                {users.map(({id, login, registeredAt, roleId}) => (
                    <UserRow key={id}
                             login={login}
                             registeredAt={registeredAt}
                             roleId={roleId}/>
                ))}
            </div>
        </div>
    )
}

export const Users = styled(UsersContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 570px;

`;
