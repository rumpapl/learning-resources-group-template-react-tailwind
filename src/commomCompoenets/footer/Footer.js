import React from 'react';
import Logo from '../logo/Logo';
import FormSection from './FormSection';
import SocialIconSection from './SocialIconSection';
import FooterLinks from './FooterLinks';

const Footer = () => {
    return (
        <div className="w-screen bg-footer  ">
            <div className='px-5 py-20 ssm:px-20 sm:px-28 space-y-5 lg:space-y-0 sm:space-x-5 lg:flex'>

                <div className="sm:flex sm:space-x-20 space-y-5 sm:space-y-0">
                    <div className='flex-shrink-0 p-auto lg:flex-auto'>
                        <Logo />
                    </div>

                    <div className="lg:flex-auto">
                        <FormSection />
                    </div>
                </div>

                <div className="lg:flex-auto space-y-4 lg:pl-10 lg:block">
                   
                        <div className="grid place-items-center lg:place-items-start lg:order-last">
                            <SocialIconSection />
                        </div>
                        <div>
                            <FooterLinks />
                        </div>
                  

                </div>
            </div>
        </div>

    )
}

export default Footer
