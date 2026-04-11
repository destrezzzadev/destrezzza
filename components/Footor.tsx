'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/home/logo/logo.png'
import { useRouter } from 'next/navigation'

const Footor = () => {

    const router = useRouter();

  return (
    <footer className='bg-[#141414] text-white mt-[20px] lg:mt-[80px] pb-[16px] lg:mb-[0px] mb-[50px]'>
        <div className='mx-[48px] pt-[48px] hidden lg:flex flex-col'>
            <div className='flex justify-between items-start'>
                <p className='text-[18px] font-[400] leading-[28px] w-[40%]'>
                    Destrezza crafts exquisite, personalized furniture with expert precision.
                    Contact us to bring your vision to life.
                </p>

                <div className='text-[18px] font-[400] flex gap-x-[36px]'>
                    <button onClick={() => router.push('/')} >Home</button>
                    <button onClick={() => router.push('/about')} >About Us</button>
                    <button onClick={() => router.push('/product')} >Products</button>
                    <button onClick={() => router.push('/gallery')} >Gallery</button>
                    <button onClick={() => router.push('/contact')} >Contact</button>
                </div>
            </div>
            <div className='mt-[111px]' >
                <p className='text-[24px] font-[400] ' >destrezzzaarthouse@gmail.com</p>
                <div className='flex gap-[68px] mt-[48px]' >
                    <div>
                        <p className='text-[18px] uppercase font-[500]' >PHONE NUMBER</p>
                        <p className='text-[16px] font-[400] mt-[18px]'>+91 81295 01494</p>
                        <p className='text-[16px] font-[400]'>+91 79943 17246</p>
                    </div>
                    <div>
                        <p className='text-[18px] uppercase font-[500]' >ADDRESS</p>
                        <p className='text-[16px] font-[400] mt-[18px]'>Destrezzza art house Pvt Ltd, building no.24 <br />
                                                                        Trikkanapuram po 
                                                                        Thavanoor road Jn <br />
                                                                        Pincode 679573 <br />
                                                                        Kuttipuram, Malappuram district
                                                                        </p>
                    </div>
                    <div>
                        <p className='text-[18px] uppercase font-[500]' >Opening Hours</p>
                        <p className='text-[16px] font-[400] mt-[18px]'>Mon to Sat,    9AM - 6PM</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-between mt-[46px]' >
                <div className='flex justify-between gap-[24px]' >
                    <p className='text-[18px] font-[400]' >Cookie Policy</p>
                    <p className='text-[18px] font-[400]' >Privacy Policy</p>
                    <p className='text-[18px] font-[400]' >Terms & Conditions</p>
                </div>
                <div className='flex justify-between gap-[24px]' >
                    <button
                        onClick={()=> router.push('https://www.instagram.com/destrezzza_?igsh=MWlmZHYyaHR1b3Zxeg==')}
                    >
                        <p className='text-[18px] font-[400]' >Instagram</p>
                    </button>
                    <button 
                        onClick={() => router.push('https://youtube.com/@destrezzzaarthouseprivatel9046?si=OKqFX9HHYk3gGph5')}
                        >
                        <p className='text-[18px] font-[400]' >YouTube</p>
                    </button>
                </div>
            </div>

            {/* <div className='flex justify-center items-center' >
                <p className='text-[17vw] font-[600] flex justify-center items-center' >DESTRE
                    <Image blurDataURL='/static/products/Wrk_Loader.png'  src={logo} alt='logo' className='h-[12vw] w-auto '  />A</p>
            </div> */}
            {/* <p className='text-center font-[600] text-[5vw] mt-[-12vh] mb-[40px] w-[90%] mx-auto '>
                ART HOUSE
            </p> */}
            <Image alt='logo' src={'/logo-bottom.png'} width={1440} height={900} className='w-[100%] h-auto' />

            <div className='flex justify-between items-center ' >
                <p className='text-[12px] font-[300] uppercase text-[#FFFFFF80]' >© 2025. Destrezzza Art House. All Rights Reserved</p>
                <p className='text-[12px] font-[300] uppercase text-[#FFFFFF80]' >Designed with intent by Dosense Creative Co.</p>
            </div>
        </div>

        <div className='flex flex-col lg:hidden pt-[24px] px-[17.5px] pb-[45px]' >
            <p className='text-[14px] font-[400] leading-[20px] '>
                Destrezza crafts exquisite, personalized furniture with expert precision.
                Contact us to bring your vision to life.
            </p>

            <div className='mt-[19px] py-[12px]' >
                <p className='text-[16px] uppercase font-[600]' >Opening Hours</p>
                <p className='text-[14px] font-[400] mt-[12px]'>Mon to Sat,    9AM - 6PM</p>
            </div>

            <div className='mt-[19px] pb-[12px]' >
                <p className='text-[16px] uppercase font-[600]' >ADDRESS</p>
                <p className='text-[14px] font-[400] mt-[12px]'>Destrezzza art house Pvt Ltd, building no.24 <br />
                                                                Trikkanapuram po 
                                                                Thavanoor road Jn <br />
                                                                Pincode 679573 <br />
                                                                Kuttipuram, Malappuram district
                                                                </p>
            </div>
            <div className='mt-[19px] py-[12px]' >
                <p className='text-[16px] uppercase font-[600]' >Opening Hours</p>
                <p className='text-[14px] font-[400] mt-[12px]'>Mon to Sat,    9AM - 6PM</p>
            </div>

            <p className='text-[16px] uppercase font-[600] py-[12px] mt-[31px]' >Platforms</p>
            <div className='flex justify-between gap-[12px] w-fit mt-[12px]' >
                
                <button
                    onClick={() => router.push('https://www.instagram.com/destrezzza_?igsh=MWlmZHYyaHR1b3Zxeg==')}
                >
                    <p className='text-[14px] text-[#E0E0E0] font-[300]' >Instagram</p>
                </button>

                <button
                    onClick={() => router.push('https://youtube.com/@destrezzzaarthouseprivatel9046?si=OKqFX9HHYk3gGph5')}
                >
                    <p className='text-[14px] text-[#E0E0E0] font-[300]' >YouTube</p>
                </button>
            </div>

            <p className='text-[24px] font-[500] my-[19px]' >hello@destrezzzaarthouse.com</p>

            <div className='flex w-full justify-between gap-[24px] my-[12px] ' >
                <p className='text-[13px] text-[#CECDCD] font-[300]' >Cookie Policy</p>
                <p className='text-[13px] text-[#CECDCD] font-[300]' >Privacy Policy</p>
                <p className='text-[13px] text-[#CECDCD] font-[300]' >Terms & Conditions</p>
            </div>

            <Image alt='logo' src={'/logo-bottom.png'} width={1440} height={900} className='w-[100%] h-auto' />

            <div className=' mt-[15px] text-center' >
                <p className='text-[12px] font-[300] uppercase text-[#FFFFFF80]' >© 2025. Destrezzza Art House. All Rights Reserved</p>
                <p className='text-[12px] font-[300] uppercase text-[#FFFFFF80]' >Designed with intent by Dosense Creative Co.</p>
            </div>
        </div>
    </footer>

  )
}

export default Footor