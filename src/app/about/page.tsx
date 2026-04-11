'use client'
import Header from '@/components/product/Header'
import UtilsHeader from '@/components/utils/Header'
import RedirectButton from '@/components/utils/RedirectButton'
import Image from 'next/image'
import React from 'react'
import I2 from '@/public/About/Approch.png'
import I3 from '@/public/About/Imageback.jpg'
import Footor from '@/components/Footor'
import AOSProvider from '@/lib/AOSWrapper'
import { useRouter } from 'next/navigation'


const Page = () => {


    const router = useRouter();

  return (
    <AOSProvider>
    <div className='text-[#141414] overflow-x-hidden' >

        <div className='hidden lg:flex  mx-[48px] mt-[48px]' >
            <Header />
        </div>
        <div className='flex lg:hidden mt-[-22px]' >
            <UtilsHeader />
        </div>
        <div className='mx-[16px] lg:mx-[48px]' >
    
            <div className='mt-[50px] lg:mt-[80px]' >
                <p className='lg:block hidden text-[14px] text-[#868684] uppercase' >ABOUT us</p>
                <p className='text-[36px] lg:text-[58px] font-[500] uppercase leading-[36px] lg:leading-[68px] mt-[0px] lg:mt-[14px]' >Crafting Elegance in <br /> Every Detail.</p>
                <p className='text-[15px] hidden lg:flex lg:text-[18px] font-[400] leading-[28px] w-full lg:w-[70%] mt-[19px] lg:mt-[24px] mb-[32px] lg:mb-[53px]' >We are a bespoke furniture studio dedicated to timeless design and masterful craftsmanship. With a deep respect for materials and form, we create pieces that embody sophistication, comfort, and enduring beauty — tailored for spaces that deserve nothing less.</p>
                <div className='lg:flex hidden flex-1 w-full justify-center items-center lg:justify-start lg:items-start' >
                    <RedirectButton  onClick={() =>{router.push('/product')}}  text='View our products' />
                </div>
            </div>
        </div>

        
        <div className="relative lg:hidden lg:w-screen w-[calc(100vw-32px)] lg:mx-0 mx-4 h-[250px] mt-[31px] lg:mt-[74px] overflow-hidden">
            <Image
                src="/ece.jpeg"
                alt="Image"
                fill
                className="object-cover object-center"
                
            />
        </div>
        <p className='mx-[5%] text-[15px] lg:hidden lg:text-[18px] font-[400] leading-[28px] w-[90%] lg:w-[70%] mt-[19px] lg:mt-[24px] mb-[32px] lg:mb-[53px]' >We are a bespoke furniture studio dedicated to timeless design and masterful craftsmanship. With a deep respect for materials and form, we create pieces that embody sophistication, comfort, and enduring beauty — tailored for spaces that deserve nothing less.</p>
        <div className='flex lg:hidden flex-1 w-full justify-center items-center lg:justify-start lg:items-start' >
            <RedirectButton onClick={() =>{router.push('/product')}} text='View our products' />
        </div>
        <div className="relative hidden lg:flex lg:w-screen  lg:mx-0 mx-4 h-[80vh] mt-[31px] lg:mt-[74px] overflow-hidden">
            <Image
                src="/ece.jpeg"
                alt="Image"
                fill
                className="object-cover object-center"
                
            />
        </div>

        <div className='mt-[31px] lg:mt-[80px] flex flex-col justify-center items-center gap-[22px] lg:gap-[148px]' >
            
                <div className='flex flex-col justify-center items-center' >
                    <h1 className="text-[36px] lg:text-[80px] font-[700] uppercase text-center bg-[url('/ece.jpeg')] bg-cover bg-center text-transparent bg-clip-text">
                        ELEGANCE
                    </h1>
                    <p className='mt-[10px] lg:mt-[0px] text-[#868684] w-[90%] lg:w-[70%] text-[14px] lg:text-[18px] font-[400] leading-[28px] text-center' >Every curve, edge, and finish is thoughtfully designed to exude timeless sophistication. We believe elegance lies in subtlety — where form enhances space without overpowering it.</p>
                </div>

                <div className='flex flex-col justify-center items-center' >
                    <h1 className="text-[36px] lg:text-[80px] font-[700] uppercase text-center bg-[url('/u.jpeg')] bg-cover bg-center text-transparent bg-clip-text">
                        Utility
                    </h1>
                    <p className='mt-[10px] lg:mt-[0px] text-[#868684] w-[90%] lg:w-[70%] text-[14px] lg:text-[18px] font-[400] leading-[28px] text-center' >True beauty is functional. Our pieces are created with purpose, offering comfort, durability, and intelligent design that integrates seamlessly into everyday living.</p>
                </div>

                <div className='flex flex-col justify-center items-center' >
                    <h1 className="text-[36px] lg:text-[80px] font-[700] uppercase text-center bg-[url('/s.jpeg')] bg-cover bg-center text-transparent bg-clip-text">
                        Simplicity
                    </h1>
                    <p className='mt-[10px] lg:mt-[0px] text-[#868684] w-[90%] lg:w-[70%] text-[14px] lg:text-[18px] font-[400] leading-[28px] text-center' >We embrace clean lines and intentional choices. Simplicity isn&lsquo;t about less — it&lsquo;s about clarity, balance, and allowing quality materials and craftsmanship to speak for themselves.</p>
                </div>
            
        </div>

        <div className='mt-[24px] lg:mt-[80px] mx-[16px] lg:mx-[48px] h-auto lg:h-[80vh] overflow-hidden flex lg:flex-row flex-col gap-[48px] justify-center items-center' >
            <Image 
                blurDataURL='/static/products/Wrk_Loader.png'  
                src={I2} className='w-[50%] h-auto hidden lg:flex mt-[74px]' alt='Image' />
            <div className='flex flex-1 h-full flex-col justify-between items-start w-full lg:max-w-[50%]' >
                <div className='flex flex-col flex-1' >
                    <p className='text-[36px] uppercase font-[500] w-[90%] lg:w-full' >Our Approach to Timeless Craft</p>
                    <p className='text-[14px] lg:text-[18px] font-[400] leading-[28px] mt-[15px]' >At the heart of our process is a deep respect for design, material, and the spaces we help shape. From initial sketches to final finishes, our approach blends traditional craftsmanship with modern precision — ensuring every piece we create is as functional as it is beautiful. We listen, we collaborate, and we build with intention, crafting furniture that feels personal, purposeful, and enduring.</p>
                </div>
                <Image 
                    blurDataURL='/static/products/Wrk_Loader.png'  
                    src={I2} className='w-full h-[412px] lg:hidden  mt-[15px] object-cover object-bottom' alt='Image' />
                <div className='hidden lg:block' >
                    <ul className='text-[18px] font-[400] uppercase flex flex-col gap-[28px]' >
                        <li><p>01. We begin with understanding your vision.</p></li>
                        <li><p>02. We shape ideas into thoughtful, functional designs.</p></li>
                        <li><p>03. Our artisans bring each design to life with precision.</p></li>
                        <li><p>04. We deliver and install with care, ready to be lived with.</p></li>
                    </ul>
                </div>
            </div>
        </div>  

        <div className='lg:hidden block' >
            <ul className='mx-[16px] mt-[15px] text-[14px] font-[400] uppercase flex flex-col gap-[28px]' >
                <li><p>01. We begin with understanding your vision.</p></li>
                <li><p>02. We shape ideas into thoughtful, functional designs.</p></li>
                <li><p>03. Our artisans bring each design to life with precision.</p></li>
                <li><p>04. We deliver and install with care, ready to be lived with.</p></li>
            </ul>
        </div>

        
        <div className='relative w-screen h-[196px] lg:h-[720px] mt-[24px] lg:mt-[80px]' >
            <Image blurDataURL='/static/products/Wrk_Loader.png'  
            src={I3} className='w-screen h-[196px] lg:h-[400px] object-cover' alt='Image' layout="fill" />
            <div className='absolute inset-0 bg-[#1414144D] flex justify-center items-center px-[5%]' >
                <p className='text-white text-[18px] lg:text-[78px] leading-[30px] lg:leading-[78px] uppercase text-center font-[500]' >“We craft more than furniture — we create tailored pieces that reflect your lifestyle, taste, and story.”</p>
            </div>
        </div>

        
        
        <Footor />
    </div>
    </AOSProvider>
  )
}

export default Page