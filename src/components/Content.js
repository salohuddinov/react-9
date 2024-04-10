import React, { Component } from 'react'
import './Content.css'
import logo from '../images/icon-heading.svg'
import img1 from '../images/Ellipse 2.png'
import img3 from '../images/Ellipse 2 (2).png'
import img2 from '../images/Ellipse 2 (1).png'



export default class Content extends Component {
    render() {
        return (
            <div className='content container'>
                <div className="icons__title">
                    <img src={logo} alt="" />
                    <h3>Ваши преподаватели</h3>
                </div>
                <div className="content__cards">
                    <div className="content__card">
                        <img src={img1} alt="" />
                        <h3>Дмитрий Иванов</h3>
                        <h4>Специалист по видеокартам</h4>
                        <button>Биография</button>
                    </div>
                    <div className="content__card">
                        <img src={img2} alt="" />
                        <h3>Дмитрий Иванов</h3>
                        <h4>Специалист по видеокартам</h4>
                        <button>Биография</button>
                    </div>
                    <div className="content__card">
                        <img src={img3} alt="" />
                        <h3>Дмитрий Иванов</h3>
                        <h4>Специалист по видеокартам</h4>
                        <button>Биография</button>
                    </div>
                </div>
            </div>
        )
    }
}
