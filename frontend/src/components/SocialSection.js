import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Socialsection = () => {
    return (
        <Network>
            <Social href='https://github.com/victordefreitas' target='_Black'>
                <FontAwesomeIcon icon={faGithubSquare} size='4x' />
                <h3>GIT</h3>
            </Social>
            <Social href='https://www.linkedin.com/in/victor-freitas-724213208/' target='_Black'>
                <FontAwesomeIcon icon={faLinkedin} size='4x' />
                <h3>Linkedin</h3>
            </Social>
        </Network>
    )
}


const Network = styled.div`
    padding: 1rem 5rem;
`;
const Social = styled.a`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius:15px 50xp;
    text-decoration: none;
    padding-left: 2rem;    

    h3{
        color:whitesmoke;
        margin:2rem;
    }
    color:darkgrey
`;
export default Socialsection