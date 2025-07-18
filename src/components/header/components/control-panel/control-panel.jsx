import {Icon} from '../../../../components'
import styled from "styled-components"

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    width: 100px;
    font-size: 17px;
    padding: 6px;
    cursor: pointer;
`;


const ControlPanelContainer = ({className}) => {
    return (
        <div className={className}>
            <RightAligned>
                <Button>Войти</Button>
            </RightAligned>
            <RightAligned>
                <Icon id='fa-backward' margin='10px 0 0 0'/>
                <Icon id='fa-file-text-o'  margin='10px 0 0 15px'/>
                <Icon id='fa-users' margin='10px 0 0 15px'/>
            </RightAligned>
        </div>
    )
}

export const ControlPanel = styled(ControlPanelContainer)`

`;
