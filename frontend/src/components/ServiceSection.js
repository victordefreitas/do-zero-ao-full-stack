import React from 'react';
import styled from 'styled-components'

import { faGitSquare, faDiscourse } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Home, Description, Image } from '../styled'

const ServiceSection = () => {
    return (
        <Service>
            <Image>
                <img src="https://tifodao.tk/images/servicos/desenvolvimento-web.svg" />
            </Image>
            <ServiceDescription>
                <h2>Bem Vindo</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faGitSquare} size='4x' />
                            <h3>Git</h3>
                            <p>Veja  meu Git</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faLaptopCode} size='4x' />
                            <h3>Portfolio</h3>
                            <p>Veja  meu Portfolio</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faDiscourse} size='4x' />
                            <h3>Cursos</h3>
                            <p>Veja  meus Cursos</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faBook} size='4x' />
                            <h3>Estudos</h3>
                            <p>Veja  meus conhecimentos</p>
                        </div>
                    </Card>
                </Cards>
            </ServiceDescription>
        </Service>
    )
}

const Cards = styled.div` 
display: flex;
flex-wrap: wrap;
padding: 2rem;
`;
const Service = styled(Home)`
  h2{
    padding-top: 4rem;
  }
    p{
        width: 70%;
        padding: 2rem 0rem 2rem 0rem;
    }
`;
const ServiceDescription = styled(Description)`
flex:2;
`;
const Card = styled.div`
    padding: 0.5rem;
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        color: White;
        padding: 1rem;
    } 
`;


export default ServiceSection;