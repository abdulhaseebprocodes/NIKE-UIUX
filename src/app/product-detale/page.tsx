import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:cols-2 mt-32  ml-60'>

         <div className='pb-40 '>

              <Image src="/s1.jpg" alt="gekrgrj" width={600} height={5986} ></Image>

         </div>
         
         <div className=' pb-40'>
           
             <h1 className='text-5xl font-semibold '>NIKE Air Force1 <br />PLT.AF.ORM </h1>

             <p className='mt-8'>Turn style on its head with this crafted take on the <br /> Air Jordan 1 Mid. Its &rdquo;inside out&rdquo;-inspired  <br /> construction, including unique layering and <br /> exposed foam accents, ups the ante on this <br /> timeless Jordan Brand silhouette. Details like the <br /> deco stitching on the Swoosh add coveted <br /> appeal, while the unexpected shading, rich <br /> mixture of materials and aged midsole aesthetic <br /> give this release an artisan finish.</p>

             <h1 className='text-5xl font-black mt-8'>₹ 8 695.00</h1>

             <button className='text-white rounded-3xl bg-gray-900 w-44 h-12  mt-3'>Add To Cart</button> 

         </div>
 

    </div>
  )
}

export default page







            //  img pic



      //  all text side
