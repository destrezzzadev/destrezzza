import React from 'react'
import logo from '@/public/home/logo/logo.png'
import bg from '@/public/home/logo/Wide.png'
import Image from 'next/image'

const OurLogo = () => {
  return (
    <div
      data-aos="fade-up" 
      id="target-section"
      className='mx-[20px] lg:mx-[48px] mt-[60px] lg:mt-[80px] text-[#141414]' >
        <p className='text-[14px] font-[500] text-[#868684] uppercase' >the story of z/z</p>
        <p className='text-[28px] font-[500] lg:text-[36px] uppercase mt-[14px]' >Our signature mark</p>
        <p className='mt-[19px] text-[14px] lg:text-[18px] font-[400] leading-[20px] lg:leading-[28px] w-full lg:w-[60%]' >Our logo is more than just a symbol — it represents who we are, what we believe in, and how we build. Every line and curve reflects our commitment to timeless design, refined craftsmanship, and thoughtful detail.</p>
        <div className='relative mt-[20px] lg:mt-[45px] flex flex-1 justify-center items-center'>
            <Image blurDataURL='/static/products/Wrk_Loader.png'  src={bg} alt="Background Image"  objectFit="cover" />
            <Image blurDataURL='/static/products/Wrk_Loader.png' 
              src={logo}
              alt='logo'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45%] lg:w-[35%] h-auto'
            />
        </div>
        <div 
          data-aos="fade-up"
          className='mt-[60px] text-[#141414] ' >
          <p className='text-[20px] font-[500] lg:text-[24px] uppercase w-full lg:w-[70%] text-black' >The twin diagonal lines form a seamless geometry — minimalist yet memorable. Each line stands for motion, partnership, and purpose.</p>
          <p className='text-[12px]  lg:text-[18px] leading-[20px] lg:leading-[28px] font-[400] w-full lg:w-[65%] mt-[15px] lg:mt-[24px]' >Crafted not just as a logo, but as a legacy, the Z/Z emblem represents more than design. It’s the language of precision, unity, and movement — the core of customizable luxury.Born from architectural inspiration and driven by modern elegance, Z/Z is our badge of excellence. Like the Nike swoosh or the Adidas stripes, it carries identity — and intention.Every angle reflects structure. Every line tells a story of partnership, strength, and sophistication.</p>
          <p className='text-center text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-[400] mt-[20px] lg:mt-[18px]' >“Where you see the Z/Z, you see more than furniture. You see Destrezza.”</p>
        </div>
    </div>
  )
}

export default OurLogo