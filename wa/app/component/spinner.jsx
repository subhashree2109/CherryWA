import React from 'react'
import spinner from '../../../public/images/Interwind-1s-200px.gif'
const Spinner = ({data}) => {
    
    return (
        <>
            <Image className='w-[200px] m-auto block' src={spinner} alt="loading ..."/>
        </>
    )
}

export default Spinner