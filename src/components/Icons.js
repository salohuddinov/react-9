import React, { Component } from 'react'
import './Icons.css'
import logo from '../images/icon-heading.svg'
import icons from '../images/logo.png'


export default class Icons extends Component {
    render() {
        return (
            <div className='icons container'>
                <div className="icons__title">
                    <img src={logo} alt="" />
                    <h3>Партнеры - топовые бренды</h3>
                </div>
                <div className="icons__card">
                    <img src={icons} alt="" />
                    <img src={icons} alt="" />
                    <img src={icons} alt="" />
                    <img src={icons} alt="" />
                    <img src={icons} alt="" />
                    <img src={icons} alt="" />
                    <img src={icons} alt="" />
                    <img src={icons} alt="" />
                </div>
            </div>
        )
    }
}
