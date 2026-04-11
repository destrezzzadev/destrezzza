'use client'
import React from 'react'
import Header from '../../components/utils/Header'
import paper from '@/public/home/Paper44.png'
import Image from 'next/image'
import about_1 from '@/public/Cover/5.jpg'
import about_2 from '@/public/Cover/4.jpg'
import about_3 from '@/public/Cover/3.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation'


import { Inter } from "next/font/google";
import AOSProvider from '@/lib/AOSWrapper'

const inter = Inter({ subsets: ["latin"] });


const Main = () => {

  const router = useRouter();
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    cssEase: 'ease-in-out',
    arrows: false,
    pauseOnHover: false,
    ltr: true,
    waitForAnimate: true,
    
  };

  const carouselImages = [
    '/Cover/10.jpg',
    '/Cover/11.jpg',
    '/Cover/12.jpg',
    '/Cover/13.jpg',
    '/Cover/Cavora.jpg'
  ];

  return (
    <AOSProvider >
    <div className='max-w-[100vw] overflow-hidden' >
      <div className="relative hidden lg:block ">
        <div className="absolute inset-0 z-0">
          {/* slider */}
          <div className='lg:hidden' >
              <Slider {...sliderSettings} className="h-fit lg:hidden">
              {carouselImages.map((image, index) => (
                  <div key={index} className="h-fit w-full">
                  <div 
                      className="h-fit w-full bg-cover bg-center"
                      style={{
                      backgroundImage: `url(${image})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      height: '330px',
                      width: '100%',
                      }}
                  />
                  </div>
              ))}
              </Slider>
          </div>
          <div className='hidden lg:block ' > 
              <Slider {...sliderSettings} className="hidden lg:block h-screen">
                  {carouselImages.map((image, index) => (
                      <div key={index} className="w-full h-[95vh]">
                      <div
                          className="w-full h-full bg-cover bg-center bg-no-repeat"
                          style={{
                          backgroundImage: `url(${image})`,
                          }}
                      />
                      </div>
                  ))}
              </Slider>
          </div>
          <div className="absolute inset-0 " />
        </div>

        <div className='bg-gradient-to-t from-[#14141430] to-transparent relative z-10 w-full lg:min-h-[95vh] lg:mt-[-20px]'>
          <div className="flex flex-1 pt-[0px] lg:pt-[20px] ">
            <Header />
          </div>
          <div  className={`relative bottom-0 left-[80px] pl-[100px]  b px-[16px] lg:px-[0px]   mt-[0px] lg:mt-[75vh] `}>
            <p className='hidden lg:flex flex-col  uppercase text-white absolute bottom-0 left-0 border-l-[5px] border-solid border-white pl-[15px]'><span className='text-[47px] font-thin leading-[47px]' >Transform your space with our  exquisite</span> <br/> <span className='text-[57px] font-normal leading-[54px]' >furniture collection</span></p>
            <p className='lg:hidden text-[25px] lg:text-[58px] font-[500] uppercase leading-[30px] lg:leading-[74px] text-white absolute bottom-0 left-0 border-l-[5px] border-solid border-white pl-[15px]'>Transform your space with our   <br className='hidden lg:flex' />exquisite furniture collection</p>
            {/* <p className='hidden lg:block px-[20%] text-[18px] font-[400] leading-[28px] text-white'>Experience the art of fine furniture. Where craftsmanship meets passion. Each piece is thoughtfully designed, precisely built, and elegantly finished to bring luxury and function into your space.</p> */}
          </div>
        </div>

        <div>
          <div className=' text-[#141414] mt-[50px] lg:mt-[-50px]' >
            <div className='hidden lg:block' >
              <Image   src={paper} className='w-screen h-fit' alt='paper' />
            </div>
            <div data-aos="fade-up" className='block lg:flex gap-[48px] flex-1 mt-[14px] lg:mt-[-103px] bg-white px-[16px] lg:px-[48px]' >
              <div className='w-full lg:w-[50%]  lg:flex lg:flex-col lg:justify-center lg:items-start' >
                <p className='uppercase text-[28px] lg:text-[58px] font-[800] lg:font-light text-[#141414BF]' >About Us</p>
                <p className='hidden lg:block text-[14px] lg:text-[18px] font-[400] lg:font-light leading-[28px] mt-[33px] lg:mt-[10px]' >We don’t just make furniture — we create experiences that last a lifetime. Every piece we design is more than just a functional item; it’s a reflection of expert craftsmanship, thoughtful innovation, and an unwavering commitment to quality. <br />
                From the careful selection of premium, sustainable materials to the precision and artistry that goes into every detail, we ensure that each product is not only visually stunning but also built with durability in mind. Our furniture is designed to harmonize with your lifestyle, offering comfort, style, and reliability in equal measure. <br />
                What truly sets us apart is the passion we pour into every creation. Each design carries a unique story — one of tradition, innovation, and care — making our furniture not just something you own, but something you cherish. <br />
                This dedication is why our customers return time and again: they know they can trust us to deliver pieces that elevate their spaces, enrich their everyday lives, and stand the test of time.</p>
                
              </div>
              <div className='flex gap-[10px] mt-[14px] justify-center items-center' >
                <Image 
                    
                  alt='chair' 
                  src={about_3} 
                  width={150} height={500}
                  className='rounded-[12px] w-[300px] h-[600px] object-cover ' />
                <div className='flex flex-col gap-[4px] lg:gap-[10px]' >
                  <Image   
                    alt='chair' 
                    src={about_1} 
                    width={150} height={150}
                    className=' rounded-[12px] w-[300px] h-[295px] object-cover' />
                  <Image   
                    alt='chair' 
                    src={about_2} 
                    width={150} height={150}
                    className=' rounded-[12px] w-[300px] h-[295px] object-cover' />
                  
                </div>
              </div>
              
              <p className='block lg:hidden text-[14px] font-[400] leading-[18px] mt-[14px] lg:mt-[33px]' >We don’t just make furniture — we create experiences that last a lifetime. Every piece we design is more than just a functional item; it’s a reflection of expert craftsmanship, thoughtful innovation, and an unwavering commitment to quality. <br />
              From the careful selection of premium, sustainable materials to the precision and artistry that goes into every detail, we ensure that each product is not only visually stunning but also built with durability in mind. Our furniture is designed to harmonize with your lifestyle,...</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className='mt-[40px] lg:mt-[92px] flex flex-col lg:flex-row  justify-center lg:justify-between items-center text-center lg:text-left text-[#141414] px-[48px] mx-[56px]' >
          <div>
            <p className='text-[48px] font-[600] text-[#CEA338]' >2022</p>
            <p className='text-[18px] font-[500] text-[]' >Year of establishment</p>
            <p className='text-[14px] text-[#868684] ' >More than 5 years in the field</p>
          </div>
          <div>
            <p className='text-[48px] font-[600] text-[#CEA338]' >1596</p>
            <p className='text-[18px] font-[500] text-[]' >Products launched</p>
            <p className='text-[14px] text-[#868684] ' >Crafted with care. Built to inspire.</p>
          </div>
          <div>
            <p className='text-[48px] font-[600] text-[#CEA338]' >124</p>
            <p className='text-[18px] font-[500] text-[]' >Clients are satisfied</p>
            <p className='text-[14px] text-[#868684] ' >These People  love us</p>
          </div>
          <div>
            <p className='text-[48px] font-[600] text-[#CEA338]' >14</p>
            <p className='text-[18px] font-[500] text-[]' >Prestigious awards</p>
            <p className='text-[14px] text-[#868684] ' >Honors that speak our story</p>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="relative lg:hidden">
        <div className="flex flex-1 mt-[-22px] pt-[0px] lg:pt-[40px] mb-[-80px]">
          <Header />
        </div>
        <div className="relative w-full h-[500px] overflow-hidden bg-black">
          {/* Slider only for images */}
          <Slider 
            {...{
              dots: false,
              infinite: true,
              speed: 1000,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              fade: false, // sliding effect
              cssEase: 'ease-in-out',
              arrows: false,
              pauseOnHover: false
            }}
            className="h-full w-full"
          >
            {['/Cover/10.jpg',
              '/Cover/11.jpg',
              '/Cover/12.jpg',
              '/Cover/13.jpg',
              '/Cover/Cavora.jpg'].map((image, index) => (
              <div key={index} className="h-[500px] w-full">
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                />
              </div>
            ))}
          </Slider>

          {/* Text overlay (independent of slides) */}
          <div className="absolute bottom-4 left-[16px] text-white py-2 rounded-lg max-w-[90%]">
            <p className={`${inter.className} inter font-[100] text-[20px] md:text-[24px] leading-[22px]`}>
              TRANSFORM YOUR SPACE WITH OUR EXQUISITE
            </p>
            <p className="inter font-[600] text-[20px] md:text-[24px] mt-[-5px]">
              FURNITURE COLLECTION
            </p>
          </div>
        </div>

        <div>
          <div className=' text-[#141414] mt-[10px] ' >
            
            <div data-aos="fade-up" className='block lg:flex gap-[48px] flex-1 mt-[14px] lg:mt-[-103px] bg-white px-[16px] lg:px-[48px]' >
              <div className='w-full lg:w-[50%]' >
                <p className={`${inter.className} uppercase text-[20px]  font-[300] text-[#141414BF]`} >About Us</p>
                <p className={`${inter.className} block lg:hidden text-[14px] font-[300] leading-[18px] mt-[8px] `} >We don’t just make furniture — we create experiences that last a lifetime. Every piece we design is more than just a functional item; it’s a reflection of expert craftsmanship, thoughtful innovation, and an unwavering commitment to quality. <br />
                From the careful selection of premium, sustainable materials to the precision and artistry that goes into every detail, we ensure that each product is not only visually stunning but also built with durability in mind. Our furniture is designed to harmonize with your lifestyle,...</p>
                
              </div>
              <div className='flex gap-[4px] mt-[30px] justify-center items-center' >
                <Image 
                    
                  alt='chair' 
                  src={about_3} 
                  width={150} height={500}
                  className='rounded-[12px] w-[150px] h-[300px] object-cover' />
                <div className='flex flex-col gap-[4px] lg:gap-[24px]' >
                  <Image   
                    alt='chair' 
                    src={about_1} 
                    width={150} height={150}
                    className=' rounded-[12px] w-[150px] h-[148px] object-cover' />
                  <Image   
                    alt='chair' 
                    src={about_2} 
                    width={150} height={150}
                    className=' rounded-[12px] w-[150px] h-[148px] object-cover' />
                  
                </div>
              </div>
              
              
            </div>
          </div>
        </div>

        <div className={`${inter.className}`} >  
          <div
            data-aos="fade-up"
            className="mt-[40px] lg:mt-[92px] grid grid-cols-2 gap-x-[64px] gap-y-[48px] 
                      justify-center items-center text-center text-[#141414] px-[40px] mx-[0px]"
          >
            <div>
              <p className="text-[28px] font-[600] text-[#CEA338]">2022</p>
              <p className="text-[12px] font-[500]">Year of establishment</p>
              <p className="text-[9px] text-[#868684]">More than 5 years in the field</p>
            </div>

            <div>
              <p className="text-[28px] font-[600] text-[#CEA338]">1596</p>
              <p className="text-[12px] font-[500]">Products launched</p>
              <p className="text-[9px] text-[#868684]">Crafted with care. Built to inspire.</p>
            </div>

            <div>
              <p className="text-[28px] font-[600] text-[#CEA338]">124</p>
              <p className="text-[12px] font-[500]">Clients are satisfied</p>
              <p className="text-[9px] text-[#868684]">These People love us</p>
            </div>

            <div>
              <p className="text-[28px] font-[600] text-[#CEA338]">14</p>
              <p className="text-[12px] font-[500]">Prestigious awards</p>
              <p className="text-[9px] text-[#868684]">Honors that speak our story</p>
            </div>
          </div>  
        </div>
                  {/* products */}

        <div className='px-[16px] mt-[40px]' >  
          <p data-aos="fade-up" className='text-[#868684] text-[14px] uppercase' >Designed to be loved</p>
          <p data-aos="fade-up" className='text-black text-[36px] font-[500] uppercase' >Our Products</p>
        </div>
        <div className='flex flex-col gap-[4px]' >

          <div 
            data-aos="fade-up"
            className="mx-[16px] relative h-[200px] bg-cover bg-center rounded-xl overflow-hidden border-white"
            style={{ 
              backgroundImage: `url("/static/products/Wrk_Arthene3.jpg")`,
              backgroundPosition: "left",
              backgroundSize: "cover",
              borderRadius: 20
            }}
          >
          
            <div className="absolute bottom-4 left-[16px] text-white py-2">
              <p className={`${inter.className} inter font-[300] text-[24px] leading-[22px] uppercase`}>
                Arthene Single Seater
              </p>
            </div>
          </div>
          <div 
            data-aos="fade-up"
            className="mx-[16px] relative h-[200px] bg-cover bg-center rounded-xl overflow-hidden 
                       border-white"   // 👈 add border classes here
            style={{ 
              backgroundImage: `url("/static/products/Wrk_Cosmos1.png")`,
              backgroundPosition: "left",
              backgroundSize: "cover",
              borderRadius: 20
            }}
          >
            <div className="absolute bottom-4 left-[16px] text-white py-2">
              <p className={`${inter.className} inter font-[300] text-[24px] leading-[22px] uppercase`}>
                Cosmos Console
              </p>
            </div>
          </div>
          <div 
            data-aos="fade-up"
            className="mx-[16px] relative h-[200px] bg-cover bg-center rounded-xl overflow-hidden 
                       border-white"   // 👈 add border classes here
            style={{ 
              backgroundImage: `url("/static/products/Wrk_Davrik3.jpg")`,
              backgroundPosition: "left",
              backgroundSize: "cover",
              borderRadius: 20
            }}
          >
            <div className="absolute bottom-4 left-[16px] text-white py-2">
              <p className={`${inter.className} inter font-[100] text-[24px] leading-[22px]`}>
                
              </p>
            </div>
          </div>
        </div>

        <div className='z-[20] relative mt-[-90px]' >
          <div className='w-full flex justify-center items-center' >
            <button 
                data-aos="fade-up"
                onClick={() => router.push('/product')}
                className='  text-[12px] border border-[#F8F8F5] border-solid rounded-[48px] w-fit px-[16px] py-[6px] flex justify-between items-center gap-[16px] uppercase font-[600] bg-[#F8F8F5] text-[#141414] hover:transition-all duration-300' >
                ALL PRODUCTS
                <div className='bg-white w-[24px] h-[24px] rounded-[24px] flex justify-center items-center ' >
                    <svg  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.22353 1L8.90588 1.09412M8.90588 1.09412L9 7.77647M8.90588 1.09412L1 9" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
            </button>
          </div>
          <div className='mt-[20px]  shadow-2xl bg-black rounded-[24px]  p-[8px] pb-[30px] flex gap-[5px]  flex-col justify-between items-center' >
              <div className='flex gap-[4px] mt-[30px] justify-center items-center' >
                <Image 
                    
                  alt='chair' 
                  src={"/Cover/2.jpg"} 
                  width={150} height={500}
                  className='rounded-[12px] w-[150px] h-[305px] object-cover object-center' />
                <div className='flex flex-col gap-[4px] lg:gap-[24px]' >
                  <Image   
                    alt='chair' 
                    src={"/Cover/5.jpg"} 
                    width={150} height={150}
                    className=' rounded-[12px] w-[150px] h-[150px] object-cover' />
                  <Image   
                    alt='chair' 
                    src={"/Cover/6.jpg"} 
                    width={150} height={150}
                    className=' rounded-[12px] w-[150px] h-[150px] object-cover' />
                  
                </div>
                
              </div>
              <div className='flex flex-row-reverse gap-[4px] mt-[0px] justify-center items-center' >
                <Image 
                    
                  alt='chair' 
                  src={'/Cover/8.jpg'} 
                  width={150} height={500}
                  className='rounded-[12px] w-[150px] h-[305px] object-cover object-center' />
                <div className='flex flex-col gap-[4px] lg:gap-[24px]' >
                  <Image   
                    alt='chair' 
                    src={'/Cover/9.jpg'} 
                    width={150} height={150}
                    className=' rounded-[12px] w-[150px] h-[150px] object-cover' />
                  <Image   
                    alt='chair' 
                    src={"/Cover/10.jpg"} 
                    width={150} height={150}
                    className=' rounded-[12px] w-[150px] h-[150px] object-cover ' />
                  
                </div>
                
              </div>
              <button 
                  data-aos="fade-up"
                  onClick={() => router.push('/gallery')}
                  className='text-[16px] mt-[30px] border border-[#F8F8F5] border-solid rounded-[48px] w-fit px-[20px] py-[12px] flex gap-[16px] uppercase font-[600] hover:bg-[#F8F8F5] hover:text-[#141414] hover:transition-all duration-300' >
                  See What We’ve Created
                  <div className='bg-white w-[24px] h-[24px] rounded-[24px] flex justify-center items-center ' >
                      <svg  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.22353 1L8.90588 1.09412M8.90588 1.09412L9 7.77647M8.90588 1.09412L1 9" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
                  
              </button>
          </div>
        </div>

        

      </div>
      
    </div>
    </AOSProvider>
  )
}

export default Main