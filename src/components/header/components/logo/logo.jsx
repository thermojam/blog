import styled from "styled-components"

const IconContainer = ({className}) => {
    return (
        <div className={className}>
            <i className="fa fa-code" aria-hidden="true"></i>
        </div>
    )
}

const Icon = styled(IconContainer)`
    font-size: 70px;
    margin-right: 20px;
`;

const LargeText = styled.div`
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
`;

const SmallText = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const LogoContainer = ({className}) => {
    return (
        <div className={className}>
            <Icon/>
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
