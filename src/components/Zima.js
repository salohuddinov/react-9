import React, { Component } from 'react'
import './Zima.css'
import rasm from '../images/icon-heading.svg'

export default class Zima extends Component {
    render() {
        return (
            <div className='Zima container'>
                <div className="zima__title">
                    <img src={rasm} alt="" />
                    <h2> Быстрый старт</h2>
                </div>
                <p>
                    Больше 90% учеников прошли полный курс и смогли <br /> собрать свой первый компьютер
                </p>
                <div className="zima__card">
                    <div className="cards">
                        <h3>100%</h3>
                        <div className="card__col"></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                        </p>
                    </div>
                    <div className="cards">
                        <h3>75%</h3>
                        <div className="card__col2"></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                        </p>
                    </div>
                    <div className="cards">
                        <h3>50%</h3>
                        <div className="card__col3"></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                        </p>
                    </div>
                    <div className="cards">
                        <h3>Итог</h3>
                        <div className="card__col4"></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
