import React from 'react'

import { Home, Description, Image } from '../styled'
import { motion } from 'framer-motion'
import { TitleAnimation } from '../Animation'

const HomeSection = () => {
    return (
        <Home>
            <Description>
                <motion.h2>Victor de Freitas  Chaves Ricarte</motion.h2>
                <h2>Desenvolvedor Full stack</h2>
                <p>
                    Olá Sou Victor mas pode me chamar de Vitor para os mais  íntimos,tenho 18 Anos,sou um Desenvolvedor Full stack
                    Trabalho na Wavii Sistemas como Desenvolvedor e Suporte tecnico,nesse Portfolio Voces Vão estar sabendo mais
                    Sobre meu lado Profissional.Trabalho com Node js,express,React,Hooks,Styled Component,Roles,MongoDB,Mysql,Git.
                </p>
                <button>Contact me</button>
            </Description>
            <Image>
                <img src="https://image.freepik.com/vetores-gratis/software-programador-de-idioma-avatar_24877-763.jpg  " />
            </Image>
        </Home>
    )

}



export default HomeSection