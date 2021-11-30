import React from 'react';
import Logo from '../logo/Logo';
import FormSection from './FormSection';
import SocialIconSection from './SocialIconSection';

const Footer = () => {
    return (
        <div className="w-screen bg-footer  ">
            <div className='px-5 py-10 ssm:px-20 sm:px-28 space-y-5 lg:space-y-0 sm:space-x-5 lg:flex'>
                <div className="sm:flex sm:space-x-20 space-y-5 sm:space-y-0">
                    <div className='flex-shrink-0 p-auto'>
                        <Logo />
                    </div>

                    <div>
                        <FormSection />
                    </div>
                </div>

                <div className="grid place-items-center lg:place-items-start">
                    <SocialIconSection />
                </div>
            </div>
        </div>

    )
}

export default Footer
