import Image from 'next/image'
import React from 'react'
import RedirectButton from '@/components/utils/RedirectButton'

const Visit = () => {
  return (
    <div className='mt-[28px] lg:mt-[80px] mx-[20px] lg:mx-[48px] flex lg:flex-row flex-col gap-[12px] lg:gap-[48px] text-black' >
        <div data-aos="fade-up" className='flex flex-1 flex-col justify-between items-start ' >
            <div className='text-center lg:text-left' >
                <p className='text-[28px] lg:text-[36px] font-[500] uppercase' >Visit Us, Feel the Craft</p>
                <p className='hidden lg:flex mt-[24px] text-[18px] font-[400]' >Discover the beauty of furniture you can see, touch, and truly feel. Our studio is more than a showroom — it's where design, craftsmanship, and comfort come together. From carefully selected materials to intricate finishes, you’ll experience the process and passion behind every piece.</p>
            </div>
            {/* <div className='hidden lg:flex' >
              <RedirectButton text='Place your Visit' />
            </div> */}

        </div>
        <Image 
            
          src={"/static/products/Wrk_ZigZag1.png"} alt='Image' 
          height={718} width={682}
          style={{ width: '682px', height: '618px' }}
          data-aos="fade-up"
          className=' w-[628px] h-[594px] hidden lg:flex  object-cover object-center  border-2 border-white rounded-[32px]' />
        <Image 
            
          src={"/static/products/Wrk_ZigZag1.png"} alt='Image' 
          height={718} width={682}
          style={{ width: '682px', height: '317px' }}
          data-aos="fade-up"
          className='w-[628px] h-[594px]  object-cover object-center  border-2 lg:hidden border-white rounded-[32px]' />
        <div data-aos="fade-up" className='lg:hidden flex' >
          <p className='mt-[12px] text-[14px] font-[400]' >Discover the beauty of furniture you can see, touch, and truly feel. Our studio is more than a showroom — it's where design, craftsmanship, and comfort come together. From carefully selected materials to intricate finishes, you’ll experience the process and passion behind every piece.</p>
        </div>
    </div>
  )
}

export default Visit