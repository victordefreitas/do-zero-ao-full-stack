import React from 'react'
import HomeSection from '../components/HomeSection'
import ServiceSection from '../components/ServiceSection'

import { motion } from 'framer-motion'
import { pagesAnimation } from '../Animation'
import ScrollTop from '../components/ScrollTop'
const home = () => {
    return (
        <motion.div
            exit='exit'
            initial='hidden'
            animate='show'
            variants={pagesAnimation}
        >
            <HomeSection />
            <ServiceSection />
            <ScrollTop />
        </motion.div>
    )
}
export default home