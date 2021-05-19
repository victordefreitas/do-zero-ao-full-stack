import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Nav = () => {
    const menu = {
        Home: '<MENU />',
        portfolio: '<PORTFOLIO/>',
        contato: '<CONTATO />'
    }
    return (
        < StyleNav>
            <h1>Victor Ricarte</h1>
            <ul>
                <li><Link to='/' >{menu.Home}</Link></li>
                <li><Link to='/portfolio'>{menu.portfolio}</Link></li>
                <li><Link to='/contacme'>{menu.contato}</Link></li>
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