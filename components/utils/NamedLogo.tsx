'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/home/logo/logo.png'
import { useRouter } from 'next/navigation'
const NamedLogo = () => {

  const router = useRouter();

  return (
    <button onClick={() => router.push('/')} className='flex justify-start items-center' >
        <p className='text-[1.2vw] text-black font-[600] flex justify-center items-center' >DESTRE
        <Image blurDataURL='/static/products/Wrk_Loader.png'  src={logo} alt='logo' className='h-[0.85vw] w-auto mx-[1.5px]'  />A</p>
    </button>
  )
}

export default NamedLogo