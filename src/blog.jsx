import styled from 'styled-components'
import {Route, Routes} from "react-router-dom"
import { Header } from "./components"

const AppColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100%;
    background: #fff;
`;

const Content = styled.div`
    position: relative;
    padding: 120px 0;
    height: 2000px;
    z-index: 0;
`;

const Footer = () => <div>Футер</div>

export const Blog = () => {

    return (
        <AppColumn>
            <Header/>
            <Content>
                <h2>Content Blog!</h2>
                <Routes>
                    <Route path="/" element={<div>Главная</div>}/>
                    <Route path="/login" element={<div>Авторизация</div>}/>
                    <Route path="/register" element={<div>Регистрация</div>}/>
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


