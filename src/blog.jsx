import styled from 'styled-components'
import {Route, Routes} from "react-router-dom"
import { Header, Footer } from "./components"
import {Authorization, Registration} from "./pages"

const AppColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100%;
    background: #fff;
    padding-top: 30px;
`;

const Content = styled.div`
    position: relative;
    padding: 120px 0;
    z-index: 0;
`;

export const Blog = () => {

    return (
        <AppColumn>
            <Header/>
            <Content>
                <Routes>
                    <Route path="/" element={<div>Главная</div>}/>
                    <Route path="/login" element={<Authorization/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/users" element={<div>Пользователи</div>}/>
                    <Route path="/post" element={<div>Новая статья</div>}/>
                    <Route path="/post/:post_id" element={<div>Статья</div>}/>
                    <Route path="*" element={<div>Ошибка</div>}/>
                </Routes>
            </Content>
            <Footer/>
        </AppColumn>
    )
}


