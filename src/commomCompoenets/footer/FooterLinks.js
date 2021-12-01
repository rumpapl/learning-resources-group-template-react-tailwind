import React from 'react'

const FooterLinks = () => {
    return (
        <div className='lg:flex lg:space-x-10 text-white  
            md:space-y-4 lg:space-y-0 justify-center lg:items-start lg:justify-center'>
            <div className='lg:flex lg:flex-1 lg:space-x-10'>
                <div className='lg:flex-1 text-sm hidden md:block
                    md:flex lg:block items-center justify-center
                    md:space-x-4 lg:space-x-0 lg:space-y-2'>
                    <div>
                        <a href='#'>TRAINING & ASSESSMENT</a>
                    </div>
                    <div>
                        <a href='#'>LLN RESOURCES</a>
                    </div>
                    <div>
                        <a href='#'>PROFESSSIONAL SERVICES</a>
                    </div>
                </div>

                <div className='lg:flex-1 text-sm hidden 
                    md:flex lg:block items-center justify-center
                    md:block md:space-x-4 lg:space-x-0 lg:space-y-2 '>
                    <div>
                        <a href='#'>BLOG</a>
                    </div>
                    <div>
                        <a href='#'>TESTIMONIALS</a>
                    </div>
                    <div>
                        <a href='#'>ABOUT US</a>
                    </div>
                    <div>
                        <a href='#'>CONTACT</a>
                    </div>
                </div>
            </div>
            <div className='lg:block lg:space-y-1
                    lg:space-x-0 space-x-4 
                    flex items-center justify-center lg:block  
                    '>
                <div>
                    <a href='#'>Terms</a>
                </div>
                <div>
                    <a href='#'>Privacy</a>
                </div>
                <div>
                    <a href='#'>Direct Debit</a>
                </div>
            </div>
        </div>
    )
}

export default FooterLinks
