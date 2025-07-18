import { Icon } from '../../../../components'
import styled from "styled-components"

const LargeText = styled.div`
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
`;

const SmallText = styled.div`
    font-size: 16px;
`;

const LogoContainer = ({className}) => {
    return (
        <div className={className}>
            <Icon id='fa-code' size='70px' margin='0 10px 0 0'/>
            <div>
                <LargeText>Блог</LargeText>
                <SmallText>веб-разработчика</SmallText>
            </div>
        </div>
    )
}

export const Logo = styled(LogoContainer)`
    display: flex;
    align-items: center;

`;
