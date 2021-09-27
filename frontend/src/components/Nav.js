import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Userfront from '@userfront/react';
import { LogoutButton } from './Auth/Authenticacao'

Userfront.init('6nz69vn7')


const Nav = () => {
    const menu = {
        Home: '<MENU /> ',
        portfolio: '<PORTFOLIO />',
        contato: '<CONTATO /> '
    }
    return (
        < StyleNav>
            <h1>Victor Ricarte</h1>
            <ul>
                <li><Link to='/' >{menu.Home}</Link></li>
                <li><Link to='/portfolio'>{menu.portfolio}</Link></li>
                <li><Link to='/contacme'>{menu.contato}</Link></li>
                {
                    !Userfront.accessToken() && (
                        <>
                            <li><Link to='/Login'>Login</Link></li>
                            <li><Link to='/Signup'>Cadastro</Link></li>
                            <refresh />
                        </>
                    )
                }
                {Userfront.accessToken() && <li><LogoutButton /></li>}


            </ul>

        </StyleNav>
    )
}
const StyleNav = styled.div`
    min-height: 10vh;
    display: flex;
    margin:auto;
    justify-content: space-between;
    align-items:center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top:0;
    ul{
        display: flex;
        list-style: none;

    } 
    li{
        padding-left:10rem;

    }
    a{
        color:whitesmoke;
        text-decoration:none;
    }  
    h1{
        color:whitesmoke;

    }
`;
export default Nav