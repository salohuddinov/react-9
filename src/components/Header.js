import React, { Component } from 'react'
import './Header.css'
import logo from '../images/logo.svg'

export default class Header extends Component {
    render() {
        return (
            <div className="coolr">
                <div className='header container'>
                    <img src={logo} alt="snj" />
                    <div className="link">
                        <h4>Главная</h4>
                        <h4>Курсы</h4>
                        <h4>Расписание</h4>
                        <h4>Преподаватели</h4>
                        <h4>Рассылка</h4>
                        <h4>Контакты</h4>
                    </div>
                    <button>Зайти в кабинет</button>
                </div>
            </div>

        )
    }
}
