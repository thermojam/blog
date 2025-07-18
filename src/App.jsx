import styled from 'styled-components'

const Div = styled.div`
    text-align: center;
    color: #5991ff;
    margin-top: 30px;
    font-size: 40px;`

export const App = () => {

    return (
        <Div>
            Hello World!
            <i className="fa fa-address-card-o"></i>
        </Div>

    )
}


