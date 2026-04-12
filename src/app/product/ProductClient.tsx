'use client'
import Footor from '@/components/Footor'
import Header from '@/components/product/Header'
import UtilsHeader from '@/components/utils/Header'
import Image from 'next/image'
import React,{useState,useEffect, useMemo} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { GiSettingsKnobs } from "react-icons/gi";
import { getProducts, categories, Product } from "./productService"
import { ProductGridSkeleton } from "@/components/product/ProductSkeleton"
  

type DataItem = {
  mainImage: string;
  image: string;      // Added missing properties
  image2: string;     // Added missing properties
  name: string;
  title: string;
  disc: string;
  material: string;   // Added missing properties
  color: string;      // Added missing properties
  care: string;       // Added missing properties
  year: string;       // Added missing properties
  cat: {              // Properly typed cat property
    category: string;
    subCategory: string;
  };
  [key: string]: string | number | boolean | { category: string; subCategory: string };
};
  
  type Categories = Record<string, string[]>;

 
  interface Props {
    initialCat?: string | null;
    initialType?: string | null;
  }
  
  
const ProductClient = ({ initialCat,initialType }: Props) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const newProducts = [1,4,2,3,5]; 

    // URL params (reactive to navigation)
    

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [mobileViewNavbar,setMobileViewNavbar] = useState(false);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [filteredDataState, setFilteredDataState] = useState<Product[]>([]);
    const [matchItems,setMatchItems] = useState(true);

    const [loading, setLoading] = useState(true);
    

  // Toggle checkbox (user-driven)
   const handleFilterChange = (item: string) => {
    const newSelected = selectedFilters.includes(item)
        ? selectedFilters.filter(f => f !== item)
        : [...selectedFilters, item];

    localStorage.setItem("selectedCat", JSON.stringify(""));
    localStorage.setItem("selectedItem", JSON.stringify(""));
    setSelectedFilters(newSelected);

    const filtered = filterDataByFilters(newSelected);

    if (filtered.length === 0) {
        console.log("⚠️ Filtered data is empty for selected filters:", newSelected);
        setFilteredDataState(allProducts);
        setMatchItems(false);
    } else {
        setFilteredDataState(filtered);
        setMatchItems(true);
    }
    };

    const normalize = (text: string) =>
        text.toLowerCase().replace(/\s+/g, " ").trim();



    // Split a filter label into meaningful words
    const splitFilterWords = (filter: string) =>
        filter
          .split(/[\s&|]+/) // split by space, &, or |
          .map((w) => w.toLowerCase())
          .map((w) => {
            if (w.endsWith("es")) return w.slice(0, -2);
            if (w.endsWith("s")) return w.slice(0, -1);
            return w;
          })
          .filter(Boolean);

        
      

    // Filter data
    const filterDataByFilters = (activeFilters: string[]) => {
        if (activeFilters.length === 0) return allProducts;

        return allProducts.filter((item) => {
            const text = normalize(`${item.name} ${item.title} ${item.disc}`);
            const catCategory = normalize(item.cat?.category || "");
            const catSub = normalize(item.cat?.subCategory || "");

            // Match against product info or category/subcategory fields
            return activeFilters.some((filter) => {
            const f = normalize(filter);
            return (
                text.includes(f) ||
                catCategory.includes(f) ||
                catSub.includes(f)
            );
            });
        });
        };

    // No manual history patching needed; we rely on useSearchParams above.
    
    

      useEffect(() => {
        async function loadProducts() {
            setLoading(true);
            try {
                const response = await getProducts(1, 1000);
                const sorted = [...response.products].sort((a, b) => 
                    String(a.name).localeCompare(String(b.name))
                );
                setAllProducts(sorted);
                setFilteredDataState(sorted);
            } catch (error) {
                console.error("Failed to load products:", error);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();

        const handleStorageChange = () => {
          const Item = JSON.parse(localStorage.getItem("selectedItem") || "null");
          if (Item && Item !== "no-filter") {
              console.log("🔁 Detected storage change, applying filter:", Item);
              handleFilterChange(Item);
          }
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("productFilterUpdate", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("productFilterUpdate", handleStorageChange);
        };
      }, []);
    

    const resetFilter = () => {
        setSelectedFilters([]);
        setMatchItems(true);
    };
    

  return (
    <div className='text-black' >

        <div className='hidden lg:flex  mx-[48px] mt-[48px]' >
            <Header />
        </div>
        <div className='flex lg:hidden mt-[-22px]' >
            <UtilsHeader />
        </div>

        <div className='mt-[0px] lg:mt-[48px] mx-[16px] lg:mx-[48px]' >
            
            <div className='mt-[30px] lg:mt-[80px]' >
                <p className='text-[#868684] hidden  text-[14px] uppercase text-center ' >products</p>
                <div className='flex flex-col justify-center items-center' >
                    <h1 className="text-[36px] lg:text-[80px] leading-[40px] lg:leading-[68px] mt-[19px] font-[600] uppercase text-left lg:text-center bg-[url('/12.jpeg')] bg-cover bg-center text-transparent bg-clip-text">
                        Designed to Define, Built <br className='hidden lg:flex' /> to Last
                    </h1>
                </div>
            </div>

            <div className='hidden lg:flex w-[100vw] mx-[-48px] mt-[30px] bg-black text-white text-center h-[64px] justify-center items-center ' >
                <p className='text-[18px]' >Our products embody a seamless fusion of form and function — where craftsmanship meets innovation.</p>
            </div>
            
            {/* Desktop View */}
           <div className='hidden lg:flex gap-[30px] mt-[40px] ' >  
                <div className='w-[40vw] flex flex-col gap-[24px] ' >
                    {Object.entries(categories).map(([category, items], idx) => (
                        <div key={idx} className="space-y-3 border-t-[1px] border-[#CCCCCC] pt-[24px]">
                            
                            <h3 className="text-[14px] font-medium text-gray-800">{category}</h3>

                            
                            <div className="flex flex-col space-y-2">
                                {items.map((item, i) => (
                                <label
                                    key={i}
                                    className="flex items-center space-x-2 text-[14px] text-gray-700"
                                >
                                    <input
                                    checked={
                                      selectedFilters.includes(item) 
                                    }
                                    type="checkbox"
                                    onChange={() => handleFilterChange(item)}
                                    className="h-4 w-4 rounded border-gray-400 text-black focus:ring-0"
                                    />
                                    <span>{item}</span>
                                </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className='w-[70vw]' >
                        {loading ? null : (matchItems ? '' : <p className='text-[24px] mb-[12px]' >Sorry No items, showing all Products</p> )}
                        {!loading && !matchItems && (
                            <button
                                onClick={resetFilter}
                                className='text-[14px] mb-[12px] bg-black text-white px-[24px] py-[5px] rounded-[24px]'
                            >
                                Reset Filter
                            </button>
                        )}
                    </div>
                    {loading ? (
                        <ProductGridSkeleton count={6} />
                    ) : (
                        matchItems && (
                            <div className="hidden lg:grid grid-cols-2 h-fit justify-start gap-[8px] gap-x-[8px] ">
                        
                                {filteredDataState.map((item, index) => (
                                    <button 
                                        onClick={() => {
                                            router.push(`/product/${item.id}`)
                                        }}

                                        key={`desktop-${index}`} className=" h-fit">
                                        <div className='relative h-[428px] rounded-[8px] overflow-hidden'>
                                            <p className={` ${newProducts.includes(index) ? 'flex' : 'hidden'} absolute top-[12px] left-[12px] px-[8px] py-[0px] text-[12px] font-bold rounded-[12px] uppercase bg-white`} >NEW</p>
                                            <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent'></div>
                                            <Image 
                                                src={item.mainImage} 
                                                alt={item.name} 
                                                width={1000} 
                                                height={1000} 
                                                className=" h-full object-cover"
                                            />
                                            <div className='absolute bottom-0 left-0 p-[20px] text-white text-left'>
                                                <p className='text-[36px] font-medium uppercase'>{item.name}</p>
                                                <p className='text-[20px] mt-[-10px] font-extralight uppercase'>{item.title}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Mobile View */}
            <div className='lg:hidden mt-[28px]  overflow-hidden' >
                <div
                    className={`fixed left-0 top-0 z-50 bg-[#ffffff80] backdrop-blur-[8px] w-screen h-screen transition-transform duration-250 ease-in-out ${
                        mobileViewNavbar ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    >
                    <div className="flex justify-between items-center">
                        <p className="mt-[48px] mx-[48px] text-[24px] w-full flex justify-between">
                        Filter
                        <button
                            onClick={() => setMobileViewNavbar(false)}
                            className="text-[14px] bg-white w-[36px] h-[36px] rounded-full shadow-lg shadow-black/10"
                        >
                            X
                        </button>
                        </p>
                    </div>

                    {/* 👇 Scrollable content */}
                    <div className="mx-[48px] flex flex-col gap-[24px] mt-[14px] overflow-y-auto  h-[calc(100vh-120px)] pb-[24px]">
                        {Object.entries(categories).map(([category, items], idx) => (
                        <div key={idx} className="space-y-3 border-t-[1px] border-[#CCCCCC] pt-[24px]">
                            <h3 className="text-[14px] font-medium text-black">{category}</h3>

                            <div className="flex flex-col space-y-2">
                            {items.map((item, i) => (
                                <label
                                key={i}
                                className="flex items-center space-x-2 text-[14px] text-black"
                                >
                                <input
                                    type="checkbox"
                                    checked={
                                      selectedFilters.includes(item) }
                                    onChange={() => handleFilterChange(item)}
                                    className="h-4 w-4 rounded border-gray-400 text-black focus:ring-0"
                                />
                                <span>{item}</span>
                                </label>
                            ))}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                <div className='w-full flex justify-end' >
                    <button onClick={()=>setMobileViewNavbar(true)} className='flex  py-[4px] rounded-[24px] ' >
                        <p className='text-[14px]   flex justify-center items-center gap-[10px] ' >Filter <GiSettingsKnobs size={20} className='transform rotate-90' /></p>
                    </button>
                </div>
                <div className='w-[70vw]' >
                    {loading ? null : (matchItems ? '' : <p className='text-[12px]' >Sorry No items, showing all Products</p> )}
                    {!loading && !matchItems && (
                        <button
                            onClick={resetFilter}
                            className='text-[12px] mt-[12px] mb-[12px] bg-black text-white px-[24px] py-[5px] rounded-[24px]'
                        >
                            Reset Filter
                        </button>
                    )}
                </div>
                {loading ? (
                    <ProductGridSkeleton count={4} />
                ) : (
                    matchItems && (
                        <div className="lg:hidden grid grid-cols-2 gap-[3px] gap-y-[3px] mt-[14px] w-full">
                            {filteredDataState.map((item, index) => (
                                <button 
                                    key={`mobile-${index}`} 
                                    onClick={() => router.push(`/product/${item.id}`)}
                                    className="flex flex-col h-fit"
                                    >
                                    <div className="relative h-[45vw] w-full rounded-[8px] overflow-hidden">
                                        {/* Gradient overlay */}
                                        <p className={` ${newProducts.includes(index) ? 'flex' : 'hidden'} z-10 absolute top-[12px] left-[12px] px-[8px] py-[0px] text-[12px] font-bold rounded-[12px] uppercase bg-white`} >NEW</p>
                                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent"></div>

                                        {/* Image */}
                                        <Image
                                            blurDataURL='/static/products/Wrk_Loader.png'
                                            src={item.mainImage}
                                            alt={item.name}
                                            fill
                                            className="object-cover w-full h-full"
                                            sizes="(max-width: 768px) 50vw, 100vw"
                                            />

                                        {/* Title overlay */}
                                        <div className="absolute bottom-0 left-0 p-[10px] text-white text-left">
                                            <p className="text-[18px] font-medium uppercase">{item.name}</p>
                                            <p className="text-[12px] mt-[-4px] font-extralight uppercase">{item.title}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )
                )}
            </div>

        </div>
        <Footor />
    </div>
  )
}

export default ProductClient