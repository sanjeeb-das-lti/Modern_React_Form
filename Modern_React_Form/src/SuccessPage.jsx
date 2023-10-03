import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import Confetti from 'react-confetti'

const SuccessPage = () => {
    const [pieces, setPieces] = useState(150);
    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0)
        }, 3000);
    };
    useEffect(() => {
        stopConfetti()
    }, []);

    const location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <m.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className='h-screen flex justify-center items-center bg-cyan-600'>
            <div className='rounded-lg w-1/2 bg-white text-gray-700 p-16 font-lato'>
                <h1 className='text-3xl pb-4'>Thanks for the Email <span className='capitalize'>{data.name}</span> 🌠</h1>
                <p className='text-lg text-gray-500'>
                    We have sent you an email over at <span className='underline'>{data.email}</span>. We will get back to you as soon as we can!
                </p>
            </div>
            <Confetti gravity={0.2} numberOfPieces={pieces} />
        </m.main>
    )
}

export default SuccessPage