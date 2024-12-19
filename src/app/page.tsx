import { Main } from 'next/document'
import Image from 'next/image'
import React from 'react'

//export const dynamic = 'force-static' //ssg

export const dynamic = 'force-dynamic' //isg
export const revalidate =43000

const page = () => {
  return (
          <main>
             <div> 
              {/* first img section */}
                 {/* text section */}
              <div className='bg-gray-50'>
              <h1 className='text-center font-semibold'>
                Hello Nike App
              </h1>
              <div className='flex justify-center'>
              Downlod the app to access everything Nike.
              <p className='underline font-medium'> Get Your Great</p>
              </div>
               </div>
               {/* image section */}
               <div className='flex justify-center mt-2'>
       <Image src="/1sh.jpg" alt="shose img" width={1500} height={1500}  />
           {/* <img src="1 sh.jpg" alt="shose img" className='h-[700px] w-[1500px]' /> */}
               </div>
               {/* text section */}
                <div>
                  <p className='flex justify-center mt-10'>Fast Look</p>

                   <div className='flex justify-center  '>
                     <h1 className='text-2xl sm:text-7xl font-bold mt-5'> NIKE AIR PULISE</h1>
                   </div>
                   <div className='flex justify-center mt-5  text-sm'>
                   <p>Extreme comfort. Hyper durable. Max volume. introduce the Air Max Pulse</p>
                   </div>
                   <div className='flex justify-center text-sm font-medium mt-2'>
                    <p> —designed to push you past your limits and help you go to the max.</p>
                   </div>
                </div>
                    {/* button secton */}
                    <div className='flex justify-center gap-4 mt-10'>
                      <button className='bg-black text-white rounded-full w-[100px] h-[40px]'>Notify Me</button>
                      <button className='bg-black text-white rounded-full w-[200px] h-[40px]'>Shop Air Mex</button>
                    </div>
                      
                      <div>




                  {/* ther is a geralli section */}

                  {/* // components/Gallery.tsx */}




    

    {/* ///////////////////////////////////////// */}
    <div className=" flex  justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  mt-10">
      

      <div className='   '>


      <div className='flex gap-5'>
      
      </div>
        <img
          className="h-auto max-w-full rounded-lg mt-16 "
          src="/shose.jpg"
          alt="Featured"
        />

      </div >
      <div className=' mt-16'>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/shose2.jpg"
          alt="Image 1"
        />
      </div>
      
      <div className='mt-16 '>
       
        <img
          className="h-auto max-w-full rounded-lg"
          src="/shose3.jpg"
          alt="Image 2"
        />
        
      </div>
     
      
     
    
    </div>



                  </div>

                  {/* second img section */}
            <div>
            <div className='flex justify-center'> 
                               
                               <div className='mt-5'>                                                     
    <div className=' font-semibold'>  <h1 className='  mt-9'>Featured</h1> </div>                                                         
         <Image src="/run img.jpg" alt="shose img" width={1500} height={1500}  /></div>             
  </div>

                   <h1 className='flex justify-center font-bold from-neutral-950 text-2xl sm:text-5xl mt-11'>STEP INTO WHAT FEELS GOOD</h1>

              <p className='flex justify-center mt-9'>Cause everyone should the feeling of running in that perfect pair</p>
             </div>
             <div className='flex justify-center mt-8'>
             <button className=' bg-black text-white rounded-full w-[152px] h-[39px] font-lg'>Find Your Shoe</button>
             </div>
          {/* ther is a gelrei 2 */}
     <div className='flex justify-center'> 
          <div className='max-h[1000px] w-[1092px]  grid
  lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4  gap-5  justify-center mt-4'>

<div>
<Image src="/bl-ts.jpg"alt='atshart' height={365}width={365} className='rounded-3xl'></Image>
<h1 className='text-xs font-semibold mt-4'>Nike Dri-FIT Challenger  ₹ 2 495</h1>
<p className='text-gray-400 my-2'>Men's 18cm (approx.) 2 </p>
<p className='text-gray-400'>-in-1 Versatile Shorts</p>
</div>
<div>
<Image src="/b-ts.jpg"alt='atshart' height={365}width={365} className='rounded-3xl'></Image>
<h1 className='text-xs font-semibold mt-6'>NIKE Dri-FIT ADV TechKnit Ultra  ₹ 3 895</h1>
<p className='text-gray-400 my-2'>Men's Short-Sleeve </p>
<p className='text-gray-400'>Running Top</p>

</div>   
<div>
<Image src="/b-ss.jpg"alt='atshart' height={365}width={365} className='rounded-3xl'></Image>
<h1 className='text-xs font-semibold mt-4'>Nike Dri-FIT ADV Run Division  ₹ 5 295
 </h1>
<p className='text-gray-400 my-2'>Women's Long-Sleeve</p>
<p className='text-gray-400'>Running Top</p>
</div>

<div>
<Image src="/b-t.jpg"alt='atshart' height={365}width={365} className='rounded-3xl'></Image>
<h1 className='text-xs font-semibold mt-4'>Nike Fast ₹ 3 795
</h1>
<p className='text-gray-400 my-2'>Women's Mid-Rise 7/8 Running </p>
<p className='text-gray-400'>Leggings with Pockets</p>
</div>
       </div>
       
       </div>


        {/* t´third img section */}
        
        <div className='bg-y'>

        </div>
          <div className='flex justify-center'> 
                               
            <div className='mt-5 relative'>
              {/* how to absolute */}
<div className='flex justify-center'> 
                               
                               <div className='mt-5'>                                                     
    <div className=' font-semibold'>  <h1 className='  mt-9'>Don't Miss</h1> </div>                                                         
         <Image src="/a man img.jpg" alt="shose img" width={1500} height={1500}  /></div>             
  </div>

     </div>   
          </div>
          <div>
            <h1 className='flex justify-center font-bold  text-2xl sm:text-6xl mt-11 '>FLIGHT ESSENTIALS</h1>
            <p className='flex justify-center mt-5'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
          </div>
          <div className='flex justify-center mt-9'>
            <button className='bg-black text-white  w-[80px] h-[39px] rounded-full'>Shop</button>
          </div>  
{/* ///////////////////////////////////////////////// */}
          {/* forth img section */}

         
          <div className='flex justify-center'> 
                               
   <div className='mt-5'>
    <div className=' font-semibold'>
       <h1 className='  mt-9'>The Essentials</h1>
                    </div>
          <Image src="/a multi claction.jpg" alt="shose img" width={1500} height={1500}  />
            </div>
                  </div>

{/* ////////////////////////////////////////////////////// */}
{/* info text */}
          <div className='flex flex-wrap justify-around ws-[1000px] msl-60 mb-11'>
{/* first row */}
            <div className=' bg-white'>             
              <h1 className='my-5 font-semibold '>
                icone
              </h1>
              <ul className=' font-extralight '>
              <li className='mb-3  font-thin'><a href=""></a>Air Force 1</li>
              <li className='mb-3 font-thin'><a href="">Huarache</a></li>
              <li className='mb-3 font-thin'><a href="">Air Max 90</a></li>
              <li className='mb-3 font-thin'><a href="">Air Max 95</a></li>
              </ul>
            </div>

             {/* second row */}
            <div className=' bg-white font-semibold'>
              <h1 className='my-5 '>
                Shoes
              </h1>
              <ul className=' font-extralight'>
              <li className='mb-3  font-thin'><a href="">All Shoes</a></li>
              <li className='mb-3 font-thin'> <a href="">Custom Shoes</a></li>
              <li className='mb-3 font-thin'><a href="">Joran Shoes</a></li>
              <li className='mb-3 font-thin'><a href="">Running Shoes</a></li>
              </ul>
           
            </div>
            {/* third row */}
            <div className='bg-white font-semibold'>
            <h1 className='my-5 '>
                Clothing
              </h1>
              <ul className=' font-extralight '>
              <li className='mb-3  font-thin'><a href="">All Clothing</a></li>
              <li className='mb-3 font-thin'><a href="">Modest Wear</a></li>
              <li className='mb-3 font-thin'><a href="">Hoodies & Puiiovers</a></li>
              <li className='mb-3 font-thin'><a href="">Shirts & Tops</a></li>
              </ul>
            </div>
            {/* forth row */}
            <div className='bg-white font-semibold'>
            <h1 className='my-5  '>
            Kids'
              </h1>
              <ul className='  font-extralight'>
              <li className='mb-3  font-thin'><a href="">Infant & Toddir Shoes</a></li>
              <li className='mb-3 font-thin'><a href="">Kids' Shoes</a></li>
              <li className='mb-3 font-thin'><a href="">Kids'Jordan Shoes </a></li>
              <li className='mb-3 font-thin'><a href="">Kids'Basketball shoes</a></li>
              </ul>
            </div>

          </div>




             </div>
          </main>
  )
}

export default page




