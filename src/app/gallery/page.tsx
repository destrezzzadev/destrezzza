import Header from '@/components/product/Header'
import UtilsHeader from '@/components/utils/Header'
import Image from 'next/image'
import React from 'react'
import Footor from '@/components/Footor'
import AOSProvider from '@/lib/AOSWrapper'
import image1 from '@/public/gallery-images/gallery-images1.jpeg'
import image2 from '@/public/gallery-images/gallery-images2.jpeg'
import image3 from '@/public/gallery-images/gallery-images3.jpeg'
import image4 from '@/public/gallery-images/gallery-images4.jpeg'
import image5 from '@/public/gallery-images/gallery-images5.jpeg'
import image6 from '@/public/gallery-images/gallery-images6.jpeg'
import image7 from '@/public/gallery-images/gallery-images7.jpeg'
import image8 from '@/public/gallery-images/gallery-images8.jpeg'
import image9 from '@/public/gallery-images/gallery-images9.jpeg'
import image10 from '@/public/gallery-images/gallery-images10.jpg'
import image11 from '@/public/gallery-images/gallery-images11.jpg'
import image12 from '@/public/gallery-images/gallery-images12.jpeg'
import image13 from '@/public/gallery-images/gallery-images13.png'
import image14 from '@/public/gallery-images/gallery-images14.jpeg'
import image15 from '@/public/gallery-images/gallery-images15.jpeg'
import image16 from '@/public/gallery-images/gallery-images16.jpeg'
import image17 from '@/public/gallery-images/gallery-images17.jpeg'


const data = [
    {
        "mainImage" : "/static/products/Wrk_FLY09099_Large.png",
        "image" : "/static/products/Wrk_FLY09123_Large.png",
        "image2":"/static/products/Wrk_Generative_Fill_copy_Large.png",
        "name" : "KIzuki",
        "title" : "Study table and chair",
        "disc" : "Rooted in calm, functional elegance, the Kizuki Study Table & Chair set is a nod to mindful living and purposeful work. Inspired by Japanese simplicity and crafted with natural materials, it creates a serene workspace where clarity, creativity, and comfort coexist.Whether it’s for a home office, creative nook, or reading corner, this set offers a peaceful no clutter, no distractions. Just you and your thoughts.",
        "material": "FSC-Certified Solid Oakwood / Natural Rattan Cane / Matte Water-Based Lacquer Finish / Powder-Coated Steel or Brass Connectors (Hidden Joints)",
        "color":"Natural Wood (Warm Oak)Optional finish: Soft Charcoal Stain or Light Ash",
        "care":"Wipe With Soft Damp Cloth Only. Avoid Direct Sunlight, Excess Moisture, Or Abrasive Cleaners. Use Coasters and Mats to Prevent Surface Marks. Periodically Check and Tighten Joints Every 6–8 Months.",
        "year":"2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Helm1.png",
        "image" : "/static/products/Wrk_Helm2.png",
        "image2":"/static/products/Wrk_Helm3.png",
        "name": "Helm",
        "title": "Chair",
        "disc": "The Helm Chair embodies a balance of timeless craftsmanship and modern design. Its rounded rattan backrest and upholstered seat bring together natural textures with contemporary comfort. Perfect for dining, reading, or a creative corner, the chair offers both function and aesthetic elegance—crafted to elevate everyday living with subtle sophistication.",
        "material": "FSC-Certified Solid Oakwood / Natural Rattan Cane Backrest / Upholstered Fabric Seat / Matte Water-Based Lacquer Finish",
        "color": "Natural Wood (Warm Oak) with Blue Upholstery and Subtle Red Piping",
        "care": "Wipe with a soft damp cloth. Avoid prolonged direct sunlight, moisture, or abrasive cleaners. Use seat cushions or mats to maintain upholstery. Periodically check and tighten joints every 6–8 months.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_ZigZag1.png",
        "image" : "/static/products/Wrk_ZigZag2.png",
        "image2":"/static/products/Wrk_ZigZag1.png",
        "name": "Zig Zag",
        "title": "Single Seater",
        "disc": "The Zig Zag Single Seater is a statement piece that merges bold patterns with refined comfort. Featuring geometric patterned armrests paired with a neutral upholstered seat, it balances artistic expression with everyday functionality. Designed for modern living rooms, cozy reading corners, or stylish lounges, it invites you to relax in effortless elegance.",
        "material": "FSC-Certified Solid Oakwood Frame / Upholstered Fabric Seat & Backrest / Patterned Fabric Armrests / Matte Water-Based Lacquer Finish",
        "color": "Natural Wood Base with Beige Upholstery and Black-White Geometric Patterned Armrests",
        "care": "Vacuum or brush lightly to remove dust. Spot clean fabric with mild upholstery cleaner. Keep away from direct sunlight and moisture. Avoid harsh cleaners on wood surfaces. Tighten joints periodically every 6–8 months.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Wellash1.png",
        "image" : "/static/products/Wrk_Wellash2.png",
        "image2":"/static/products/Wrk_Wellash1.png",
        "name": "Wellash",
        "title": "Chair",
        "disc": "The Wellash Chair is an ode to minimal elegance and timeless design. With its fluid curved backrest and slender frame, it showcases masterful craftsmanship while offering lightweight comfort. The natural rattan seat complements the warm wooden finish, making it an ideal choice for dining areas, reading nooks, or serene lounge settings. Designed to blend seamlessly into modern and traditional spaces, the Wellash is simplicity perfected.",
        "material": "FSC-Certified Solid Oakwood Frame / Natural Rattan Cane Seat / Matte Water-Based Lacquer Finish",
        "color": "Natural Wood (Rich Walnut Tone) with Light Rattan Seat",
        "care": "Dust regularly with a soft dry cloth. Avoid direct sunlight, excessive moisture, and abrasive cleaners. Protect rattan from heavy loads to preserve its weave. Tighten joints periodically every 6–8 months.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Ashcaen1.png",
        "image" : "/static/products/Wrk_Ashcaen2.png",
        "image2":"/static/products/Wrk_Ashcaen3.png",
        "name": "Ashcaen",
        "title": "Dining Table",
        "disc": "The Ashcaen Dining Table is designed as a centerpiece for meaningful gatherings. With its sculpted base and rich wooden finish, it combines strength with refined elegance. Paired with rattan-back chairs and cushioned seats, the set creates a warm, welcoming atmosphere for family meals, celebrations, or quiet moments of connection. Its timeless craftsmanship ensures it complements both contemporary and classic interiors.",
        "material": "FSC-Certified Solid Oakwood Tabletop & Frame / Matte Water-Based Lacquer Finish / Rattan-Back Dining Chairs with Upholstered Cushions",
        "color": "Natural Wood (Deep Walnut Finish) with Light Beige Upholstered Seating and Cane Backs",
        "care": "Wipe table and chairs with a soft damp cloth. Avoid direct sunlight, excess heat, or abrasive cleaners. Use coasters, placemats, and trivets to protect surfaces. Tighten joints every 6–8 months for lasting durability.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Meridian1.png",
        "image" : "/static/products/Wrk_Meridian2.png",
        "image2":"/static/products/Wrk_Meridian3.png",
        "name": "Meridian",
        "title": "Console",
        "disc": "The Meridian Console is a striking blend of modern curves and timeless craftsmanship. Its sweeping edges and diagonal panel details create a bold yet refined silhouette, designed to serve as both a functional storage solution and an aesthetic statement. Perfect for living rooms, dining areas, or entryways, it offers ample storage while enhancing interiors with a sense of understated luxury.",
        "material": "FSC-Certified Solid Oakwood Frame & Panels / Veneered Finish with Diagonal Detailing / Matte Water-Based Lacquer",
        "color": "Warm Walnut Frame with Contrasting Golden-Bronze Toned Panels",
        "care": "Dust regularly with a soft dry cloth. Clean spills immediately with a slightly damp cloth. Avoid direct sunlight, excess heat, and abrasive cleaners. Use mats or runners to protect the surface from scratches.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Ashtone3.png",
        "image" : "/static/products/Wrk_Ashtone2.png",
        "image2":"/static/products/Wrk_Ashtone1.png",
        "name": "Ashtone",
        "title": "Dining Table",
        "disc": "The Ashtone Dining Table embodies contemporary sophistication with its sleek stone-finish top and sculpted dark base. Designed for both modern homes and refined workspaces, it strikes the perfect balance between elegance and durability. Paired with plush upholstered chairs featuring curved backs and matte black legs, it offers comfort and style in equal measure. Ideal for intimate dinners, professional meetings, or lively gatherings, the Ashtone is a versatile centerpiece for today’s living.",
        "material": "Engineered Stone Tabletop with Matte Finish / Powder-Coated Metal Base / Upholstered Fabric Chairs with High-Density Foam and Solid Wood Legs",
        "color": "Soft Grey Stone Top with Deep Black Base / Taupe Upholstered Chairs with Black Frames",
        "care": "Clean the tabletop with a soft damp cloth; avoid harsh chemicals and acidic cleaners. Use placemats and coasters to prevent stains and scratches. Vacuum chair upholstery gently with a soft brush attachment. Keep away from direct sunlight and high humidity to preserve finish and fabric.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Crown1.png",
        "image" : "/static/products/Wrk_Crown2.png",
        "image2":"/static/products/Wrk_Crown2.png",
        "name": "Crown",
        "title": "Single Seater",
        "disc": "The Crown Single Seater blends mid-century elegance with modern comfort. Crafted with a gracefully curved wooden frame and paired with deep-cushioned seating, it offers both visual charm and lasting support. The earthy green upholstery contrasts beautifully with the warm wooden tones, while patterned cushions add a touch of personality. Perfect for living rooms, reading corners, or lounge areas, the Crown invites relaxation with a timeless aesthetic.",
        "material": "FSC-Certified Solid Wood Frame / High-Density Foam Cushioning / Upholstered Fabric Seat and Backrest / Removable Accent Cushions",
        "color": "Walnut Brown Frame with Olive Green Upholstery / Decorative Cushions in Geometric and Striped Patterns (Red, Black, and White Accents)",
        "care": "Vacuum fabric regularly using a soft brush attachment. Spot clean spills immediately with a damp cloth and mild detergent. Keep away from direct sunlight to prevent fading. Polish wooden frame occasionally with furniture wax for long-lasting sheen.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Flummox3.png",
        "image" : "/static/products/Wrk_Flummox2.png",
        "image2":"/static/products/Wrk_Flummox1.png",
        "name": "Flummox",
        "title": "King Bed",
        "disc": "The Flummox King Bed is a modern sanctuary of comfort and sophistication. Featuring a sleek upholstered frame with a tall cushioned headboard, it creates a refined centerpiece for any bedroom. The clean lines and neutral tones exude calmness, while the spacious design ensures restful sleep. Paired with vibrant accent bedding, the Flummox adapts seamlessly to contemporary or classic interiors, balancing functionality with style.",
        "material": "Solid Wood Frame with Upholstered Panels / High-Density Foam Padding / Premium Fabric Upholstery / Optional Storage Base",
        "color": "Soft Taupe Upholstered Frame with Neutral Undertones / Customizable Bedding Options",
        "care": "Vacuum upholstery regularly using a soft brush attachment. Spot clean stains immediately with a damp cloth and mild fabric cleaner. Rotate mattress regularly for longevity. Avoid exposure to direct sunlight and high humidity to preserve the fabric and structure.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Cosmos1.png",
        "image" : "/static/products/Wrk_Cosmos2.png",
        "image2":"/static/products/Wrk_Cosmos3.png",
        "name": "Cosmos",
        "title": "Console",
        "disc": "The Cosmos Console embodies refined minimalism with a striking modern twist. Its natural wood frame is paired with a bold, deep blue fluted panel that adds depth and texture to the design. The open shelving provides versatile display space, while the sliding door conceals storage with elegance. A perfect blend of form and function, the Cosmos serves as an accent piece for entryways, living rooms, or dining spaces, elevating interiors with its understated sophistication.",
        "material": "Solid Wood Frame / Engineered Wood Panel with Fluted Finish / Smooth Sliding Mechanism",
        "color": "Natural Wood Frame with Deep Blue Fluted Front",
        "care": "Dust regularly with a soft, dry cloth. Wipe spills immediately with a damp cloth to prevent staining. Avoid harsh chemicals and abrasive cleaners. Keep away from direct sunlight and high humidity to maintain finish and structure.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Carbon2.png",
        "image" : "/static/products/Wrk_Carbon1.png",
        "image2":"/static/products/Wrk_Carbon3.png",
        "name": "Carbon",
        "title": "Single Seater",
        "disc": "The Carbon Single Seater strikes a bold balance between comfort and artistic design. Its sleek black wooden frame embraces a richly patterned upholstered seat, while the deep red rattan sides add texture and sophistication. A warm-toned cushion provides contrast, making it both inviting and visually striking. Ideal for cozy nooks, lounges, or accent seating, the Carbon transforms any corner into a refined retreat with a touch of modern eclectic charm.",
        "material": "Solid Wood Frame / Rattan Side Panels / High-Density Foam Cushioning / Premium Upholstered Fabric Seat",
        "color": "Black Wooden Frame with Red Rattan Sides / Upholstery in Muted Grey and Burgundy Patterns / Accent Cushion in Burnt Red",
        "care": "Vacuum upholstery regularly using a soft brush attachment. Spot clean fabric with a damp cloth and mild detergent. Keep rattan and wood dust-free with a dry cloth. Avoid direct sunlight to preserve colors and prevent fading.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Bansih2.png",
        "image" : "/static/products/Wrk_Bansih3.png",
        "image2":"/static/products/Wrk_Bansih4.png",
        "name": "Bansih",
        "title": "Sofa Family",
        "disc": "The Bansih Sofa Family blends contemporary elegance with natural textures. Featuring smooth solid wood frames with woven rattan side panels, the set comes with bright yellow cushions and patterned backrests that add vibrancy to the muted room tones. A matching coffee table with rattan accents and a sleek wooden media unit complete the setting, making it ideal for modern living rooms with a touch of earthy warmth.",
        "material": "Solid Wood Frame / Rattan Side Panels / High-Density Foam Cushioning / Premium Upholstered Fabric",
        "color": "Natural Wood with Rattan Detailing / Yellow Cushions / Blue and Beige Patterned Backrest",
        "care": "Vacuum cushions and upholstery regularly using a soft brush. Spot clean with a damp cloth and mild detergent. Wipe rattan and wood surfaces with a dry or slightly damp cloth. Keep away from direct sunlight and excess moisture to preserve colors and textures.",
        "year": "2024 Collection",
    },
    {
        "mainImage" : "/static/products/Wrk_Heaven3.png",
        "image" : "/static/products/Wrk_Heaven2.png",
        "image2":"/static/products/Wrk_Heaven1.png",
        "name": "Heaven",
        "title": "Sofa Family",
        "disc": "The Heaven Sofa Family is a modern blend of simplicity and luxury. Featuring smooth rounded edges with plush white upholstery, it offers a clean and elegant aesthetic for contemporary living spaces. The solid wooden side accents add warmth and grounding to the minimalist look, while patterned throw pillows introduce a pop of earthy tones. Paired with a sleek wooden and metal coffee table, this set brings both comfort and sophistication to any home.",
        "material": "Solid Wood Accents / High-Density Foam Cushioning / Premium Upholstered Fabric / Metal Coffee Table Base",
        "color": "White Upholstery with Wooden Side Accents / Earth-Tone Patterned Cushions / Dark Brown and Black Coffee Table",
        "care": "Vacuum upholstery regularly with a soft brush attachment. Blot spills immediately with a clean, dry cloth. For stains, use a mild fabric cleaner and spot test before applying. Wipe wood and metal surfaces with a dry or slightly damp cloth. Keep away from direct sunlight and moisture to prevent fading or warping.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "/static/products/Wrk_Ashrattan3.png",
        "image" : "/static/products/Wrk_Ashrattan2.png",
        "image2":"/static/products/Wrk_Ashrattan1.png",
        "name": "Ashrattan",
        "title": "Chair & Table Set",
        "disc": "The Ashrattan Chair & Table Set embodies timeless craftsmanship with a modern touch. The chairs feature a natural rattan backrest framed in smooth solid wood, paired with plush velvet-like upholstered seats in a rich rose hue for comfort and elegance. Complementing them is a round wooden dining table with a sculpted pedestal base that adds a bold, contemporary character. This set is perfect for dining corners, cafes, or cozy conversational spaces, offering both warmth and style.",
        "material": "Solid Wood Frame / Natural Rattan Backrest / High-Density Foam Cushioning / Premium Velvet Upholstery / Solid Wood Table",
        "color": "Natural Wood with Rattan Detailing / Rose-Pink Upholstery / Dark Walnut Table",
        "care": "Dust rattan and wood surfaces regularly with a dry cloth. Vacuum cushions with a soft brush attachment. Spot clean upholstery with mild soap solution and a damp cloth. Avoid harsh cleaners. Keep away from direct sunlight and moisture to prevent fading and warping.",
        "year": "2024 Collection",
    },
    {
        "mainImage" : "/static/products/Wrk_HeavenChair2.png",
        "image" : "/static/products/Wrk_HeavenChair2.png",
        "image2":"/static/products/Wrk_HeavenChair1.png",
        "name": "Heaven",
        "title": "Chair",
        "disc": "The Heaven Chair is a plush and inviting single-seater designed for maximum comfort with a modern aesthetic. Its soft white upholstery and generously cushioned seat create a cozy retreat, while the rounded armrests and solid wooden side accents add an elegant contemporary touch. Ideal as a standalone lounge chair or as part of the Heaven Sofa Family, it brings warmth, style, and sophistication to any living space.",
        "material": "Solid Wood Accents / High-Density Foam Cushioning / Premium Upholstered Fabric",
        "color": "White Upholstery with Natural Wooden Side Accents",
        "care": "Vacuum upholstery regularly with a soft brush. Blot spills immediately with a clean, dry cloth. For stains, use a mild upholstery cleaner and spot test before applying. Wipe wooden accents with a dry or slightly damp cloth. Keep away from direct sunlight and excessive moisture to prevent fading and warping.",
        "year": "2024 Collection",
    },
]

const page = () => {
  return (
    <AOSProvider>
    <div>
        <div className='hidden lg:flex  mx-[48px] mt-[48px]' >
            <Header />
        </div>
        <div className='flex lg:hidden mt-[-22px]' >
            <UtilsHeader />
        </div>

        <div className='my-[80px] mx-[48px] hidden lg:flex flex-col  gap-[8px] justify-center items-center overflow-hidden'>
            <div className='flex gap-[8px]'>
                <div className='flex flex-col gap-[8px] w-[w-[calc((100vw - 256px)/3)]]'>
                    <Image   
                        src={image8} 
                        alt={data[0].name} 
                        width={438} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    <Image   
                        src={image7} 
                        alt={data[1].name} 
                        width={438} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <Image   
                        src={image15} 
                        alt={data[2].name} 
                        width={438} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[398px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    <Image   
                        src={image12} 
                        alt={data[3].name} 
                        width={438} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[398px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    <Image   
                        src={image14} 
                        alt={data[4].name} 
                        width={438} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[398px] object-cover bg-slate-500 rounded-[16px] overflow-hidden object-bottom' 
                    />
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <Image   
                        src={image6} 
                        alt={data[5].name} 
                        width={438} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    <Image   
                        src={image3} 
                        alt={data[6].name} 
                        width={438} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                </div>
            </div>
            <div className='flex flex-row-reverse gap-[8px]'>  
                <div className='flex flex-col gap-[8px]'>
                    <Image   
                        src={image7} 
                        alt={data[7].name} 
                        width={665} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-full object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <Image   
                        src={image9} 
                        alt={data[9].name} 
                        width={665} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    <Image   
                        src={image10} 
                        alt={data[10].name} 
                        width={665} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                </div>
                
            </div>
            <div className='flex flex-row gap-[8px]'>  
                <div className='flex flex-col gap-[8px]'>
                    <Image   
                        src={'/gallery-images/gallery-images1-dv.jpeg'} 
                        alt={data[7].name} 
                        width={665} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-full object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <Image   
                        src={'/gallery-images/gallery-images2-dv.jpeg'} 
                        alt={data[9].name} 
                        width={665} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    <Image   
                        src={'/gallery-images/gallery-images3-dv.jpeg'} 
                        alt={data[10].name} 
                        width={665} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                </div>
                
            </div>
            <div className='flex flex-row-reverse gap-[8px]'>  
                <div className='flex flex-col gap-[8px]'>
                    <Image   
                        src={'/gallery-images/gallery-images5-dv.jpeg'} 
                        alt={data[7].name} 
                        width={665} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-full object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <Image   
                        src={'/gallery-images/gallery-images4-dv.jpeg'} 
                        alt={data[9].name} 
                        width={665} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                    <Image   
                        src={'/gallery-images/gallery-images6-dv.jpeg'} 
                        alt={data[10].name} 
                        width={665} 
                        height={600} 
                        className='!w-[calc(100vw - 256px)] !h-[605px] object-cover bg-slate-500 rounded-[16px] overflow-hidden' 
                    />
                </div>
                
            </div>
            
            
        </div>
        
        <div className='lg:hidden mx-[12px] my-[24px] flex flex-col gap-[3px]'>
           
            <div className='flex gap-[3px]'>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image1} 
                    alt='gallery image 1' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image2} 
                    alt='gallery image 2' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
            </div>

            
            <div className='aspect-video'>
                <Image 
                src={image3} 
                alt='gallery image 3' 
                width={500} 
                height={500}
                className='object-cover w-full h-full rounded-[8px]' 
                />
            </div>

            
            <div className='flex gap-[3px]'>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image4} 
                    alt='gallery image 4' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image5} 
                    alt='gallery image 5' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
            </div>

            
            <div className='flex gap-[3px]'>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image6} 
                    alt='gallery image 6' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image7} 
                    alt='gallery image 7' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
            </div>

            
            <div className='aspect-video'>
                <Image 
                src={image8} 
                alt='gallery image 8' 
                width={500} 
                height={500}
                className='object-cover w-full h-full rounded-[8px]' 
                />
            </div>

            
            <div className='flex gap-[3px]'>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image9} 
                    alt='gallery image 9' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image10} 
                    alt='gallery image 10' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
            </div>

            
            <div className='aspect-video'>
                <Image 
                src={image11} 
                alt='gallery image 11' 
                width={500} 
                height={500}
                className='object-cover w-full h-full rounded-[8px]' 
                />
            </div>

            
            <div className='flex gap-[3px]'>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image12} 
                    alt='gallery image 12' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image13} 
                    alt='gallery image 13' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
            </div>

            
            <div className='flex gap-[3px]'>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image15} 
                    alt='gallery image 15' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image16} 
                    alt='gallery image 16' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
            </div>

            
            <div className='flex gap-[3px]'>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image14} 
                    alt='gallery image 14' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
                <div className='flex-1 aspect-[3/4]'>
                <Image 
                    src={image17} 
                    alt='gallery image 17' 
                    width={500} 
                    height={500}
                    className='object-cover w-full h-full rounded-[8px]' 
                />
                </div>
            </div>
        </div>
        

        <Footor />
    </div>
    </AOSProvider>
  )
}

export default page