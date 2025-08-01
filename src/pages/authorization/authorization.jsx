import {useState} from "react"
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {server} from '../../bff'
import styled from 'styled-components'

const authFormSchema = yup.object().shape({
    login: yup
        .string()
        .required('Заполните Логин')
        .matches(/^\w+S/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
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
})

export const AuthorizationContainer = ({className}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
        },
        resolver: yupResolver(authFormSchema),
    })

    const [serverError, setServerError] = useState()

    const onSubmit = ({login, password}) => {
        server.authorize(login, password)
            .then(({error, res}) => {
                if (error) {
                    setServerError(`Ошибка запроса:  ${error}`)
                }
            })
    }

    const formError = errors?.login?.message || errors?.password?.message

    const errorMessage = formError || serverError;

    return (
        <div className={className}>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Логин..." {...register('login')} />
                <input type="text" placeholder="Пароль..." {...register('password')} />
                <button type="submit" disabled={!!formError}>Войти</button>
                {errorMessage && <div>{errorMessage}</div>}
            </form>
        </div>
    )
}

export const Authorization = styled(AuthorizationContainer)`
    display: flex;
    align-items: center;
    flex-direction: column;

    & > form {
        display: flex;
        flex-direction: column;
    }
`
