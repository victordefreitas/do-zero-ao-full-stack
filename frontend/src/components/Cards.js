
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Cards = ({ project }) => {

    return (
        <>
            <Cardslist>
                <Link to={`/portfolio/${project.slug}`}>
                    <Content>
                        <Image src={project.image} />
                        <Info>
                            <h3>{project.title}</h3>
                            <h4>{(project.createDat)}</h4>
                            <p>{project.description}</p>
                        </Info>
                    </Content>
                </Link>
            </Cardslist>
        </>
    )
}


const Cardslist = styled.div`
    min-height:30vh;
    box-shadow: oxp 5px 10px rgba(240,255,0,2.0);
    border-color:#416CD5;
    text-align:center;
    border-radius:2rem;
    cursor: pointer;
    overflow:hidden;

`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:100%;
    height:70vh;
`;
const Image = styled.img`
    width:100%;
    height:70%;
`;
const Info = styled.div`
    text-align: left;
    padding-left: 1rem;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    h3{
        padding-top:2rem;
    }
`;
export default Cards