import React from 'react'
import HeroSection from '../commomCompoenets/heroSection/HeroSection'
import Footer from '../commomCompoenets/footer/Footer'
const PageLayout = ({ children }) => {
    return (
        <>
            <HeroSection />
            {children}
            <Footer />
        </>
    )
}

export default PageLayout
