import styled from "styled-components"
import {Logo} from "./components"




export const HeaderContainer = ({className}) => (
    <header className={className}>
        <Logo/>
    </header>
)

export const Header = styled(HeaderContainer)`
    position: fixed;
    top: 0;
    width: 1200px;
    padding: 20px 40px;
    height: 120px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.46);
    background-color: #fff;
    z-index: 1;
`;

