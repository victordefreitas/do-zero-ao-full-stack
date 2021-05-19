import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//icon

import SocialSection from '../components/SocialSection'
const Contactme = () => {
    return (
        <Contactstyled>
            <Areas>
                <Title>
                    <div>ENTRE EM CONTATO</div>
                </Title>
                <Form>
                    <form id='contato-form' method='post'>
                        Nome:<input type='text' />
                    Email:<input type='text' />
                    Messagem:<textarea rowns='5 ' />
                        <button type='submit'>Enviar</button>
                    </form>
                </Form>
            </Areas>
            <SocialSection />
        </Contactstyled>
    )

}
const Contactstyled = styled.div`
    padding: 1rem 10rem;
    color:#353535
    min-height 90vh;
`;

const Title = styled.div`
    margin-bottom: 4rem;
    h2{
        color:white;
    }
`;
const Areas = styled.div`
    display: flex;
    align-items:center;
`;
const Form = styled.div`
display:flex;
color:whitesmoke;
align-items:center;
height:150%;
box-align:border-box;
width:100%;
border-radius: 4px;
padding:12px 20px;
border: 2xp solid #ccc;
resize:none;

`;
export default Contactme;