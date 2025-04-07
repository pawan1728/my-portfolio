import React from 'react'
import LOGO_URL from '../../assets/react.svg'
import MY_PIC from '../../assets/pawan.jpeg'

const Logo = () => {
    return (
        <div>
            <img src={MY_PIC} alt='Logo' className='w-20 h-20 rounded-full' />
        </div>
    )
}

export default Logo