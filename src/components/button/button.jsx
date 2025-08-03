import styled from "styled-components"

const ButtonContainer = ({ children, className, width, ... props }) => {
    return (
        <button className={className}  {... props}>
            {children}
        </button>

    )
}

export const Button = styled(ButtonContainer)`
    width: ${({ width = '100%' }) => width};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid dimgray;
    border-radius: 20px;
    font-size: 17px;
    padding: 10px;
    cursor: pointer;
`
