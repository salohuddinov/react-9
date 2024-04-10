import React, { Component } from 'react'
import './Main.css'
import img1 from '../images/icon-1.png'
import img2 from '../images/icon-2.png'
import img3 from '../images/icon-3.png'


export default class Main extends Component {
    render() {
        return (
            <div className='main container'>
                <h2>Получите профессию прямо сейчас</h2>
                <div className="main__card">
                    <div className="main__cards">
                        <img src={img1} alt="dfd" />
                        <h3>
                            Только практические <br />
                            навыки в работе
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Netus eget velit quisque accumsan <br /> amet tortor. Velit, volutpat egestas fringilla mi <br /> porttitor tempus. Placerat dui.
                        </p>
                    </div>
                    <div className="main__cards">
                        <img src={img2} alt="" />
                        <h3>
                            Работа на самом <br />
                            современном оборудовании
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Netus eget velit quisque accumsan <br /> amet tortor. Velit, volutpat egestas fringilla mi <br /> porttitor tempus. Placerat dui.
                        </p>
                    </div>
                    <div className="main__cards">
                        <img src={img3} alt="" />
                        <h3>
                            Сертификация <br />
                            по окончании обучения
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Netus eget velit quisque accumsan <br /> amet tortor. Velit, volutpat egestas fringilla mi <br /> porttitor tempus. Placerat dui.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
