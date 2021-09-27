import React from 'react'
import styled from 'styled-components'

import Cards from '../components/Cards'
import { useApi } from '../Hooks/useApi'
import PortfolioDetail from '../components/PortfolioDetail'
import { useLocation } from 'react-router'

import { motion } from 'framer-motion'
import { pagesAnimation } from '../Animation'
import ScrollTop from '../components/ScrollTop'

const Portfolio = () => {
    const location = useLocation()
    const slug = location.pathname.split('/')[2]
    const { data } = useApi('api/portfolio')
    return (
        <>

            <Portfo
                exit='exit'
                initial='hidden'
                animate='show'
                variants={pagesAnimation}
            >
                {slug && <PortfolioDetail slug={slug} />}
                <Cardlist>
                    {data?.data?.data?.map(project => {
                        return (<Cards key={project.slug} project={project} />)
                    })}

                </Cardlist>
                <ScrollTop />
            </Portfo>
        </>
    )


}
const Portfo = styled(motion.div)`
    min-height: 90vh;
    overflow:hidden;
    padding: 5rem 10rem;
`;
const Cardlist = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,2fr));
    grid-column-gap:2rem;
    grid-row-gap:5rem;
`;

export default Portfolio;