import {useEffect, useState} from "react"
import {Navigate} from "react-router-dom"
import {useDispatch, useSelector, useStore} from 'react-redux'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {server} from '../../bff'
import {AuthFormError, H2, Button, Input} from "../../components/index.js"
import { UseResetForm } from '../../hooks'
import {setUser} from "../../actions"
import {selectUserRole} from '../../selectors'
import {ROLE} from "../../constants/index.js"
import styled from 'styled-components'


const regFormSchema = yup.object().shape({
    login: yup
        .string()
        .required('Заполните Логин')
        .matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
        .min(3, 'Неверный логин. Минимум 3 символа')
        .max(15, 'Неверный логин. Максимум 15 символов'),

    password: yup
        .string()
        .required('Заполните Пароль')
        .matches(
            /^[\w#%]+$/,
            'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %'
        )
        .min(6, 'Неверно заполнен пароль. Минимум 6 символа')
        .max(30, 'Неверно заполнен пароль. Максимум 30 символов'),

    passcheck: yup
        .string()
        .required('Заполните повтор пароля')
        .oneOf([yup.ref('password'), null], 'Повтор пароля не совпадает')
})

export const RegistrationContainer = ({className}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
            passcheck: '',
        },
        resolver: yupResolver(regFormSchema),
    })

    const [serverError, setServerError] = useState(null)
    const dispatch = useDispatch()
    const roleId = useSelector(selectUserRole);

    UseResetForm(reset);

    const onSubmit = ({login, password}) => {
        server.register(login, password)
            .then(({error, res}) => {
                if (error) {
                    setServerError(`Ошибка запроса: ${error}`)
                    return;
                }
                dispatch(setUser(res))
                sessionStorage.setItem('userData', JSON.stringify(res))
            })
    }

    const formError = errors?.login?.message || errors?.password?.message || errors?.passcheck?.message
    const errorMessage = formError || serverError;

    if (roleId !== ROLE.GUEST) {
        return <Navigate to='/'></Navigate>
    }

    return (
        <div className={className}>
            <H2>Регистрация</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" placeholder="Логин..." {...register('login', {
                    onChange: () => setServerError(null),
                })} />
                <Input type="password" placeholder="Пароль..." {...register('password', {
                    onChange: () => setServerError(null),
                })} />
                <Input type="password" placeholder="Проверка пароля..." {...register('passcheck', {
                    onChange: () => setServerError(null),
                })} />
                <Button type="submit" disabled={!!formError}>Зарегистрироваться</Button>
                {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
            </form>
        </div>
    )
}

export const Registration = styled(RegistrationContainer)`
    display: flex;
    align-items: center;
    flex-direction: column;

    & > form {
        display: flex;
        flex-direction: column;
        width: 260px;
    }
`
