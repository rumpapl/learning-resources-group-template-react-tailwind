import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialIconSection = () => {
    return (
        <div className='text-themeColor'>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faLinkedinIn} />
    </div>
    )
}

export default SocialIconSection
