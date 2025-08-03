import {Link, useNavigate} from "react-router-dom"
import {Button, Icon} from '../../../../components'
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {selectUserSession, selectUserLogin, selectUserRole} from '../../../../selectors'
import {ROLE} from "../../../../constants/index.js"
import {logout} from "../../../../actions/logout.js"
import styled from "styled-components"
import {sessions} from "../../../../bff/sessions.js"


const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const StyledBackIcon = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const StyledIcon = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const UserName = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const ControlPanelContainer = ({className}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const roleID = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectUserSession)

    return (
        <div className={className}>
            <RightAligned>
                {roleID === ROLE.GUEST ? (
                    <Button> <Link to='/login'>Войти</Link></Button>
                ) : (<>
                    <UserName>{login}</UserName>
                    <StyledIcon>
                        <Icon id='fa-sign-out' margin='0 0 0 10px' onClick={() => dispatch(logout(session))}/>
                    </StyledIcon>
                </>)}
            </RightAligned>
            <RightAligned>
                <StyledBackIcon onClick={() => navigate(-1)}>
                    <Icon id='fa-backward' margin='10px 0 0 0'/>
                </StyledBackIcon>
                <Link to='/post'><Icon id='fa-file-text-o' margin='10px 0 0 15px'/></Link>
                <Link to='/users'><Icon id='fa-users' margin='10px 0 0 15px'/></Link>
            </RightAligned>
        </div>
    )
}

export const ControlPanel = styled(ControlPanelContainer)`

`;
