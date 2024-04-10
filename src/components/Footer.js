import React, { Component } from 'react'
import './Footer.css'
import img1 from '../images/vk.svg'
import img2 from '../images/youtube.svg'
import img3 from '../images/facebook.svg'
import img4 from '../images/instagram.svg'


export default class Footer extends Component {
    render() {
        return (
            <div className='footer container'>
                <h2>Статьи каждую неделю</h2>
                <p>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
                <form className='footer__from'>
                    <input type="text" placeholder='E-mail' />
                    <button type='button'>Подписаться</button>
                </form>
                <div className="footer__icon">
                    <button>
                        <img src={img1} alt="" />
                    </button>
                    <button>
                        <img src={img2} alt="" />
                    </button>
                    <button>
                        <img src={img3} alt="" />
                    </button>
                    <button>
                        <img src={img4} alt="" />
                    </button>
                </div>
                <p>Templates #18. More on Figma.info</p>
            </div>
        )
    }
}
