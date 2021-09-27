import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useApi } from '../Hooks/useApi'
import { useHistory } from 'react-router-dom'


const PortfolioDetail = ({ slug }) => {
    const history = useHistory()
    const { data } = useApi(`/api/portfolio/${slug}`)


    const exitPortfolioDetail = (e) => {
        const element = e.target
        if (element.classList.contains('shaddow')) {
            document.body.style.overflow = 'auto'
            history.push('localhost:3000/portfolio')
        }
    }
    return (
        <div>
            <Cardsho className='shaddow' onclick={exitPortfolioDetail}>
                <Detail>
                    <Stats>
                        <div>
                            <Title>{data?.data?.data?.title}</Title>
                            <Descriptionshort>
                                <p>{data?.data?.data?.description}</p>
                            </Descriptionshort>
                        </div>
                        <Info>
                            <h3>Plataforma/Tecnologia</h3>
                            <div>
                                <Tecnologias>
                                    {
                                        data?.data?.data?.data?.tecnologia.map(tech => {
                                            return (
                                                <Tecnologia key={tech.icon}>
                                                    <FontAwesomeIcon icon={[tech.iconType, tech.icon]} size='4x' /> {tech.label}
                                                </Tecnologia>
                                            )
                                        })
                                    }
                                </Tecnologias>
                            </div>
                        </Info>
                    </Stats>
                    <Description>
                        <p>{data?.data?.data?.longDescription}</p>
                    </Description>
                    <div>
                        <img src={data?.data?.data?.image} />
                    </div>

                </Detail>
            </Cardsho>
        </div>
    )
}
const Detail = styled.div`
    width: 80%;
    min-height: 80vh;
    background:white ;
    position: absolute;
    border-radius:2rem;
    left: 10%;
    top: 15%;
    margin-bottom:10%;
    z-index: 10;
    img{
        width:100%;
        object-fit: cover;
        height:50vh;
    }
`;
const Stats = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
`;
const Title = styled.h2`
    color:#696969;
`;
const Description = styled.div`
    padding: 1rem 5rem;
        p{
            color:black;
        }
`;
const Descriptionshort = styled(Description)`
    padding: 0;
`;

const Tecnologia = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top:2rem;
    svg{
        color:#416cd5;
    }
`;
const Tecnologias = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    color: #416cd5;
`;
const Info = styled.div`
    text-align:center;
    min-width: 300xp;
     h3{
         color: #696969;
     }
 `;
const Cardsho = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background:rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left:0;
    z-index:5;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background:white;
    }
 `;
export default PortfolioDetail