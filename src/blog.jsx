import styled from 'styled-components'
import {Route, Routes} from "react-router-dom"

const Content = styled.div`
   padding: 120px 0;
`

const H2 = styled.h2`
    text-align: center;
`

const Header = () => <div>Шапка</div>
const Footer = () => <div>Футер</div>

export const Blog = () => {

    return (
        <>
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
        </>
    )
}


