import {useState} from "react"
import {Icon} from "../../../../components/index.js"
import {TableRow} from "../table-row/table-row.jsx"
import {useServerRequest} from "../../../../hooks/index.js"
import styled from "styled-components"


const UserRowContainer = ({
                              className,
                              login,
                              id,
                              registeredAt,
                              roleId: userRoleId,
                              roles
                          }) => {
    const [initialRoleId, setInitialRoleId] = useState(userRoleId)
    const [selectedRoleId, setSelectedRoleId] = useState(userRoleId)

    const requestServer = useServerRequest()

    const onRoleChange = ({target}) => {
        setSelectedRoleId(Number(target.value));
    }

    const onRoleSave = (userId, newUserRoleId) => {
        requestServer('updateUserRole', userId, newUserRoleId)
            .then(() => {
                setInitialRoleId(newUserRoleId)
            })
    }

    const isSaveButtonDisabled = selectedRoleId === initialRoleId;

    return (
        <div className={className}>
            <TableRow border={true}>
                <div className="login-column">{login}</div>
                <div className="registered-at-column">{registeredAt}</div>
                <div className="role-column">
                    <select value={selectedRoleId} onChange={onRoleChange}>
                        {roles.map(({id: roleId, name: roleName}) => (
                            <option key={roleId} value={roleId}>{roleName}</option>
                        ))}
                    </select>

                    <Icon id='fa-floppy-o'
                          margin='0 0 0 10px'
                          disabled={isSaveButtonDisabled}
                          onClick={() => onRoleSave(id, selectedRoleId)}/>
                </div>
            </TableRow>
            <Icon id='fa-trash-o'
                  margin='0 0 0 10px'
                  onClick={() => {
                  }}/>
        </div>
    )
}

export const UserRow = styled(UserRowContainer)`
    display: flex;
    margin-top: 10px;

    & select {
        border: none;
        font-size: 16px;
        padding: 0 1px;
    }

`;
