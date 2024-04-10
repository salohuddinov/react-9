import React, { Component } from 'react'
import './Section.css'
import logo from '../images/icon-heading.svg'

export default class Section extends Component {
    render() {
        return (
            <div className='section container'>
                <img src={logo} alt="jsjn" />
                <h2>Программа обучения</h2>
                <p>Больше 90% учеников прошли полный курс и смогли <br /> собрать свой первый компьютер</p>
                <div className="section__cards">
                    <div className="card__left">
                        <div className="section__card">
                            <p>Неделя №1</p>
                            <h2>
                                Красивая часть курса,
                                которая помогает в успехе
                            </h2>
                        </div>
                        <div className="section__card">
                            <p>Неделя №1</p>
                            <h2>
                                Красивая часть курса,
                                которая помогает в успехе
                            </h2>
                        </div>
                        <div className="section__card">
                            <p>Неделя №1</p>
                            <h2>
                                Красивая часть курса,
                                которая помогает в успехе
                            </h2>
                        </div>
                        <div className="section__card">
                            <p>Неделя №1</p>
                            <h2>
                                Красивая часть курса,
                                которая помогает в успехе
                            </h2>
                        </div>
                    </div>
                    <div className="card__centr"></div>
                    <div className="card__right">
                        <div className="right__card">
                            <p>Неделя №1</p>
                            <h2>
                                Красивая часть курса,
                                которая помогает в успехе
                            </h2>
                        </div>
                        <div className="right__card">
                            <p>Неделя №1</p>
                            <h2>
                                Красивая часть курса,
                                которая помогает в успехе
                            </h2>
                        </div>
                        <div className="right__card">
                            <p>Неделя №1</p>
                            <h2>
                                Красивая часть курса,
                                которая помогает в успехе
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
