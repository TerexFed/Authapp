import React from 'react'
import s from './Modal.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import { ReactComponent as XMarkIcon } from '../../icons/xmark-solid.svg'
import FormElem from '../FormELem/FormElem'

export default function Modal({ active, setActive }) {
    return (
        <div className={` ${s.modal} ${active && s.active}`} >
            <div className={` ${s.modal_content} ${active && s.active}`}>
                <Link to={'/'}>
                    <XMarkIcon onClick={() => setActive(false)} class={`${s.xmark_icon}`} />
                </Link>
                <Routes>
                    <Route
                        path='/login'
                        element={<FormElem
                            title='Авторизация'
                            button={{ submit: 'Авторизоваться', redirect: 'Регистрация' }}
                            link={'/registration'}
                            type={'login'}
                            input={{ email: 'Почта', password: 'Пароль' }}
                            infoText="Введите логин и пароль вашего аккаунта"
                        />} />
                    <Route
                        path='/registration'
                        element={<FormElem
                            title='Регистрация'
                            button={{ submit: 'Зарегистрироваться', redirect: 'Авторизация' }}
                            link={'/login'}
                            type={'reg'}
                            input={{ email: 'Почта', password: 'Пароль', secondPassword: 'Подтвердите пароль' }}
                            infoText="Зарегистрируясь на сайте вы соглашаетесь с нашими правилами и политикой конфиденциальности"
                        />} />
                    <Route
                        path='/reset'
                        element={<FormElem
                            title='Сброс пароля'
                            button={{ submit: 'Сбросить пароль', redirect: 'Авторизация' }}
                            link={'/login'}
                            type={'reset'}
                            input={{ email: 'Почта' }}
                            infoText="Укажите почту зарегестрированного аккаунта. Ссылка на сброс пароля будет действовать 24 часа"
                        />} />
                </Routes>
            </div>
        </div>
    )
}
