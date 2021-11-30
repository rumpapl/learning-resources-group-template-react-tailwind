import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialIconSection = () => {
    return (
        <div className='text-footer flex space-x-2'>
            <div className="rounded-full hover:text-white text-xs bg-themeColor h-5 w-5 flex items-center justify-center">
                <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="rounded-full hover:text-white text-xs bg-themeColor h-5 w-5 flex items-center justify-center">
                <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="rounded-full hover:text-white text-xs bg-themeColor h-5 w-5 flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
        </div>
    )
}

export default SocialIconSection
