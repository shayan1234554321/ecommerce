import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateContext'
import { BsBagCheckFill } from "react-icons/bs"
import Link from 'next/link'
import { runFireworks } from '../lib/utils'

const Success = () => {

  const { setCartItems, setTotalPrice , setTotalQuantities } = useStateContext()
  const [ order, setOrder ] = useState()

    useEffect(()=>{
        runFireworks()
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
    },[])

  return (
    <div className='success-wrapper' >
        <div className='success' >
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>A Big Thanks for your order!</h2>
            <p className='email-msg' >Check your email inbox for the receipt</p>
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