import React, { useEffect } from 'react'
import { BsBagCheckFill } from "react-icons/bs"
import Link from 'next/link'
import { runSnow } from '../lib/utils'

const Success = () => {

    useEffect(()=>{
        runSnow()
    },[])

  return (
    <div className='success-wrapper' >
        <div className='success' >
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Sorry to hear you have some issues</h2>
            <p className="description">
                Please email <a className='email' href="mailto:kshayan091@gmail.com" >kshayan091</a> , if any questions
            </p>
            <Link href="/" >
                <button type='button' width="300px" className='btn' >
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success