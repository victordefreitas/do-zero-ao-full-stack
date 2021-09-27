import React from 'react'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import { pagesAnimation } from '../Animation'

import SocialSection from '../components/SocialSection'
import ScrollTop from '../components/ScrollTop'

const Contactme = () => {
    return (
        <Contactstyled
            exit='exit'
            initial='hidden'
            animate='show'
            variants={pagesAnimation}
        >
            <Title>
                <h2>ENTRE EM CONTATO</h2>

                <Areas>
                    <Form>
                        <form id='contato-form' method='post'>
                            Nome:<input type='text' />
                            Email:<input type='text' />
                            Messagem:<textarea rowns='1 ' />
                            <button type='submit'>Enviar</button>
                        </form>
                    </Form>
                    <SocialSection />
                </Areas>
            </Title>
            <ScrollTop />
        </Contactstyled>
    )

}
const Contactstyled = styled(motion.div)`
    padding: 1rem 10rem;
    color:#353535
    min-height 90vh;
`;

const Title = styled.div`
    margin-bottom: 1rem;
    h2{
        color:whitesmoke;
       
    }
`;
const Areas = styled.div`
    display: flex;
    align-items:center;
`;
const Form = styled.div`
    display:grid;
    color:whitesmoke;
    align-items:top;
    height:100%;
    box-align:border;
    width:7%;
    border-radius: 60px;
    border: 5xp solid #ccc;
    resize:none;

`;
export default Contactme;