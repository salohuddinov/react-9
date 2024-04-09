import React, { Component } from 'react'
import './Zanimania.css'

import rasm from '../images/about__img.png'

export default class Zanimania extends Component {
    render() {
        return (
            <div className='zanimania container'>
                <img src={rasm} alt="" />
                <div className="zanim__content">
                    <h2>Чем мы занимаемся?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
                </div>
            </div>
        )
    }
}
