import React from 'react';
import Button from '../btn/Button';

const formSection = () => {
    return (
        <div className='space-y-2'>
            <div className='w-full'>
                <input type='text' className='input-box w-full' placeholder="Email" />
            </div>
            <div className="ssm:flex ssm:space-x-2 space-y-2 ssm:space-y-0 w-full">
                <input type='text' className='input-box w-full flex-shrink flex-1 ' placeholder="First Name" />
                <input type='text' className='input-box w-full flex-shrink flex-1 ' placeholder="Last Name" />
            </div>
            <div className="ssm:flex  space-y-2 ssm:space-y-0 w-full">
                <input type='text' className='input-box w-full flex-shrink flex-3' placeholder="Company Name" />
                <Button className='flex-grow ssm:w-40 input-box w-full'>submit</Button>
            </div>

        </div>
    )
}

export default formSection
