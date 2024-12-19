import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div >

      <div className='flex  justify-between  mt-10'>

         <h1 className='ml-24 text-lg font-bold'>NEW (50)</h1>  
         <div className='flex  gap-10 mr-24 font-semibold'>     
         <h1>Hide Filters</h1>
         <h1>Sort By</h1>
         </div>  
        
      </div>
<div className='flex my-16  gap-16'>
     
        <div className='ml-24 '>         
            <p className='mt-3'>Shoes</p>
            <p className='mt-3'>Sports B bras</p>
            <p className='mt-3'>Top & T-Shirts</p>
            <p className='mt-3'>Hoodies & Sweatshirts</p>
            <p className='mt-3'>Jackets</p>
            <p className='mt-3'>Trousers & Tights</p>
            <p className='mt-3'>Shorts</p>
            <p className='mt-3'>Tracksuits</p>
            <p className='mt-3'>Jumpsuits & Rompers</p>
            <p className='mt-3'>Skirts & Dresses</p>
            <p className='mt-3'>Socks</p>
            <p className='mt-3'>Accessories <br />& Equipment</p>

               {/* gender */}
            <hr className='max-w-60 ml-5 my-10'/>
            <div className='ml-5'>
            <p className=' font-bold mb-3'>Gender</p>
            <ul className='text-xl rounded-lg '>
           <li className='flex'><input type="checkbox"  ></input> <p>Men</p></li>
           
           <li className='flex'><input type="checkbox" ></input><p>Whomen</p></li>
           
           <li className='flex'><input type="checkbox" ></input><p>Unisex</p></li>
           </ul>
           </div>
                {/* Kids */}
           <hr className='max-w-60 ml-5 my-10'/>

          <div className='ml-5'>

          <p className=' font-bold mb-4'>Kids</p>
          <ul className='text-xl rounded-lg'>
          <li className='flex'><input type="checkbox"  ></input> <p>Boys</p></li>
          <li className='flex'><input type="checkbox" ></input><p>Girls</p></li>
           </ul>

           </div>


        <hr className='max-w-60 ml-5 my-10'/>

       <div className='ml-5'>

       <p className=' font-bold mb-4'>Shop By Price</p>
       <ul className='text-xl rounded-lg'>
       <li className='flex'><input type="checkbox"  ></input> <p>Under ₹ 2 500.00</p></li>
       <li className='flex'><input type="checkbox" ></input><p>₹ 2 501.00 - ₹ 7 500.00</p></li>
        </ul>

        </div>


           

        </div>
   {/* product,s */}
 <div className='max-h[1000px] w-[1092px]  grid
  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-3  justify-center '>

   
   <div className=" "><Link href="/product-detale" ><img src="/p2.jpg" alt="" className='' /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p4.jpg" alt="" className='' /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p5.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p6.jpg" alt="" className='' /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>

   <div className=" "><Link href="/product-detale" ><img src="/p7.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p8.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p9.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p10.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ></Link><img src="/p11.jpg" alt=""  /><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   
   
   <div className=" "><Link href="/product-detale" ><img src="/s1.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p2.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p3.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p4.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p5.jpg" alt=""  /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>

   <div className=" "><Link href="/product-detale" ><img src="/p6.jpg" alt="" /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p7.jpg" alt="" /></Link><img src="/p7.jpg" alt="" /><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p8.jpg" alt="" /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p9.jpg" alt="" /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ></Link><img src="/p10.jpg" alt="" /><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ></Link><img src="/p10.jpg" alt="" /><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>


   <div className=" "><Link href="/product-detale"><img src="/p11.jpg" alt="jdnj" /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/s1.jpg" alt="" /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p7.jpg" alt="" /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p9.jpg" alt="" /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>
   <div className=" "><Link href="/product-detale" ><img src="/p3.jpg" alt="" /></Link><p className='text-red-800 text-sm'>just in</p> <p className='font-extralight'>NIKE air Force 1 Mid</p> <p>Man,<br />clo1</p></div>

   


</div>

</div>
   </div>

   
  )
}

export default page
