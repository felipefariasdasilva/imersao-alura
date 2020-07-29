import React from 'react'
import Logo from '../../assets/img/logo.png'
import Button from '../Button'
import './menu.css'
import { Link } from 'react-router-dom'

export default function Menu(){

    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="myFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video"> 
                Novo vídeo
            </Button>
        </nav>
    )
}