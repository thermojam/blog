import {useState} from "react"
import {Icon} from "../../../../components/index.js"
import {TableRow} from "../table-row/table-row.jsx"
import styled from "styled-components"
import {useDispatch} from "react-redux"


const UserRowContainer = ({className, login, registeredAt, roleId: userRoleId, roles}) => {
    const [selectedRoleId, setSelectedRoleId] = useState(userRoleId)

    const dispatch = useDispatch()

    const onRoleChange = ({target}) => {
        setSelectedRoleId(Number(target.value));
    }

    const isSaveButtonDisabled = selectedRoleId === userRoleId;

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
                              onClick={() => dispatch(/*TODO*/)}/>
                </div>
            </TableRow>
            <Icon id='fa-trash-o' margin='0 0 0 10px' onClick={() => dispatch(/*TODO*/)}/>
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
