import styled from "styled-components"
import {ControlPanel, Logo} from "./components"


const Description = styled.div`
    font-style: italic;
`;

export const HeaderContainer = ({className}) => (
    <header className={className}>
        <Logo/>
        <Description>
            Веб-технологии <br/>
            Написание кода <br/>
            Разбор ошибок <br/>
        </Description>
        <ControlPanel/>
    </header>
)

export const Header = styled(HeaderContainer)`
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 1200px;
    padding: 20px 40px;
    height: 120px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.46);
    background-color: #fff;
    z-index: 1;
`;

