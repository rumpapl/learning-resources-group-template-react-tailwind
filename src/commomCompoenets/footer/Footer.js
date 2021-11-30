import React from 'react';
import Logo from '../logo/Logo';
import FormSection from './FormSection';

const Footer = () => {
    return (
        <div className="w-screen bg-footer  ">
            <div className='px-5 py-10 sm:px-20 space-y-5 lg:space-y-0 sm:space-x-5 lg:flex'>
                <div className="sm:flex sm:space-x-5 space-y-5 sm:space-y-0">
                    <div className='flex-shrink-0 '>
                        <Logo />
                    </div>

                    <div className=''>
                        <FormSection />
                    </div>
                </div>


                <div className=''>
                    <Logo />
                </div>

            </div>
        </div>

    )
}

export default Footer
