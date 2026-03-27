'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/product/Header'
import UtilsHeader from '@/components/utils/Header'
import Footor from '@/components/Footor';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ImageLoader from '@/components/utils/ImageLoader';
import { getProductById, categories, Product } from '../productService'
import productData from '../productData'
const { data } = productData;

const Page = () => {
    const { id } = useParams();
    const router = useRouter();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState('');
    const [currentDisc, setCurrentDisc] = useState('Material');

    // Using primitive id dependency
    const productId = String(id);

    React.useEffect(() => {
        async function fetchProduct() {
            setLoading(true);
            try {
                const fetchedProduct = await getProductById(productId);
                if (fetchedProduct) {
                    setProduct(fetchedProduct);
                    setCurrentImage(fetchedProduct.mainImage);
                }
            } catch (error) {
                console.error("Failed to fetch product:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [productId]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Product not found</div>
    }


  return (
    <div className='overflow-x-hidden' >
        <div className='hidden lg:flex  mx-[48px] mt-[48px]' >
            <Header />
        </div>
        <div className='flex lg:hidden mt-[-22px]' >
            <UtilsHeader />
        </div>
        
        <div className='lg:hidden text-black flex flex-col mt-[40px] mx-[20px] ' >
            <p className='text-[36px] leading-[40px] font-[500] uppercase  bg-red-5 ' >{product.name}  </p>
            <p className='text-[15px] font-thin' >{product.title}</p>
        </div>

        <div className='hidden lg:flex flex-col m-[48px]' >
            <div className='flex gap' >
                <div className='flex gap-[4px] h-[614px] w-[50vw] ' >
                    <Image 
                        unoptimized  src={currentImage} width={1000} height={1000} className='w-[calc(50vw-250px)] h-full object-cover' alt='Main Image' />
                    <div className='flex flex-col gap-[4px] w-[250px] ' >
                        {[product.mainImage, product.image, product.image2].map((imgSrc, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentImage(imgSrc)}
                                className={`w-[205px] h-full overflow-hidden `}
                            >
                                <Image 
                                    unoptimized  
                                    src={imgSrc} 
                                    width={1000} 
                                    height={1000} 
                                    className='w-full h-full object-cover' 
                                    alt={`Thumbnail ${index + 1}`} 
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div className='text-black m-[48px] w-[32vw]'  >
                    <p className='text-[36px] font-normal' >{product.name}</p>
                    <p className='text-[15px] font-thin leading-[18px] mt-[-10px]'  >{product.title}</p>
                    <p className='text-[14px] font-light mt-[10px]' >{product.disc}</p>
                    <div className='mt-[25px] gap-[10px]' >
                        <div className='flex text-[14px] font-normal gap-[10px]' >
                            {['Material', 'Designer', 'Type', 'Year'].map((disc) => (
                                <button 
                                    key={disc}
                                    onClick={() => setCurrentDisc(disc)}
                                    className={`border-b ${currentDisc === disc ? 'border-b-black' : 'border-b-transparent'}`}
                                >
                                    {disc}
                                </button>
                            ))}
                        </div>
                        <p className='mt-[10px] text-[13px] font-light' >{
                            currentDisc == 'Material' ? product.material :  
                            currentDisc == 'Designer' ? product.color :  
                            currentDisc == 'Type' ? product.care :  
                            currentDisc == 'Year' ? product.year :  ''}</p>
                    </div>
                </div>
                
            </div>
            <div className='mt-[64px] hidden lg:block'>
                <p className='text-[36px] font-[500] uppercase text-black'>Other Collections</p>
                <div className="flex flex-row justify-start gap-[14px] mt-[24px] overflow-x-scroll">
                    {data.slice(0, 10).map((item, index) => (
                        <button 
                            key={`desktop-${index}`} 
                            onClick={() => router.push(`/product/${item.id}`)}
                            className="h-fit relative group bg-white"
                        >
                            <div className="h-[300px] w-[300px] rounded-[20px] overflow-hidden">
                                <div className="transition duration-300 ease-in-out group-hover:scale-110 h-full"> {/* Scale container instead */}
                                    <Image 
                                        src={item.mainImage} 
                                        alt={item.name} 
                                        width={1000} 
                                        height={1000} 
                                        className="h-full object-cover"
                                    />
                                </div>
                                <div className="absolute rounded-[20px] bottom-0 left-0 bg-gradient-to-t from-[#00000040] to-transparent h-1/2 w-full"></div>
                                <div className="absolute bottom-0 left-0 p-[20px] text-white text-left">
                                    <p className="text-[36px] font-medium uppercase">{item.name}</p>
                                    <p className="text-[20px] mt-[-10px] font-extralight uppercase">{item.title}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

        </div>

        <div className=' lg:hidden mx-[0px] lg:mx-[48px] mt-[20px] lg:mt-[48px] text-black' >
            <div className='my-[40px] flex lg:flex-row flex-col lg:gap-[14px] gap-y-[5px] lg:gap-y-0  overflow-hidden' >
                <div className='flex flex-col gap-[4px] ' >
                    <Image 
                        unoptimized  src={currentImage} width={1000} height={1000} className='w-full h-[414px] object-cover' alt='Main Image' />
                    <div className='flex  gap-[4px] ' >
                        {[product.mainImage, product.image, product.image2].map((imgSrc, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentImage(imgSrc)}
                                className={`w-full h-full overflow-hidden `}
                            >
                                <Image 
                                    unoptimized  
                                    src={imgSrc} 
                                    width={1000} 
                                    height={1000} 
                                    className='w-full h-full object-cover bg-black aspect-square' 
                                    alt={`Thumbnail ${index + 1}`} 
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt-[24px] mx-[16px] lg:mt-[64px]' >
                <div className='flex lg:flex-row flex-col justify-between items-start my-[12px]' >
                    <p className='text-[18px] font-[500] uppercase' >Description</p>
                    <p className='mt-[10px] lg:mt-[0px] text-[13px] lg:text-[24px] w-full lg:w-[70%] font-light lg:font-[300]' >{product.disc}</p>
                </div>

                
                <div className='mt-[25px] gap-[10px]' >
                    <div className='flex text-[14px] font-normal gap-[10px]' >
                        {['Material', 'Designer', 'Type', 'Year'].map((disc) => (
                            <button 
                                key={disc}
                                onClick={() => setCurrentDisc(disc)}
                                className={`border-b ${currentDisc === disc ? 'border-b-black' : 'border-b-transparent'}`}
                            >
                                {disc}
                            </button>
                        ))}
                    </div>
                    <p className='mt-[10px] text-[13px] font-light' >{
                        currentDisc == 'Material' ? product.material :  
                        currentDisc == 'Designer' ? product.color :  
                        currentDisc == 'Type' ? product.care :  
                        currentDisc == 'Year' ? product.year :  ''}</p>
                </div>
                

            </div>

            <div className='mt-[64px]  lg:hidden mx-[20px]' >
                <p className='text-[24px] font-[500] uppercase text-black'  >Other Collections</p>
                <div className="flex flex-row justify-start gap-[14px] mt-[24px] overflow-x-scroll">

                    {data.slice(0, 10).map((item, index) => (
                        <button 
                            key={`desktop-${index}`} 
                            onClick={() => router.push(`/product/${item.id}`)}
                            className="h-fit relative group bg-white"
                        >
                            <div className="h-[300px] w-[300px] rounded-[20px] overflow-hidden">
                                <Image 
                                    src={item.mainImage} 
                                    alt={item.name} 
                                    width={1000} 
                                    height={1000} 
                                    className="h-full object-cover"
                                />
                                <div className="absolute rounded-[20px] bottom-0 left-0 bg-gradient-to-t from-[#00000040] to-transparent h-1/2 w-full"></div>
                                <div className="absolute bottom-0 left-0 p-[20px] text-white group-hover:text-black text-left">
                                    <p className="text-[36px] font-medium uppercase">{item.name}</p>
                                    <p className="text-[20px] mt-[-10px] font-extralight uppercase">{item.title}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

            </div>
        </div>
        <Footor />
    </div>
  )
}

export default Page