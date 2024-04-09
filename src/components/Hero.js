import React, { Component } from 'react'
import './Hero.css'
import herobg from '../images/main-screen__bgc.png'

export default class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <img src={herobg} alt="jnsjfnd" />
                <div className="hero__content container">
                    <h1>Первый курс <br />
                        по компьютерной сборке
                    </h1>
                    <div className="time">
                        <div className="time__card">
                            <h3>18</h3>
                            <h6>Часов</h6>
                        </div>
                        <div className="time__card">
                            <h3>18</h3>
                            <h6>Часов</h6>
                        </div>
                        <div className="time__card">
                            <h3>18</h3>
                            <h6>Часов</h6>
                        </div>
                        <div className="time__card">
                            <h3>18</h3>
                            <h6>Часов</h6>
                        </div>
                    </div>
                </div>
                <div className="hero__bgra">
                    <div className="hero__bottm container">
                        <button>Заказать курс</button>
                        <div className="hero__bottm__title">
                            <div className="text">
                                <h2>Учеников всего:</h2>
                                <h2>Успешно закончили курс:</h2>
                            </div>
                            <div className="hero__bottm__nom">
                                <h2>200</h2>
                                <h2>190</h2>
                            </div>
                        </div>
                        <div className="prise">
                            <div className="host">
                                <h2>Заработано учениками:</h2>
                                <h3>400 000₽</h3>
                            </div>
                            <div className="chost">
                                <div className="lengh">
                                    <div className='bgcolor'> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
