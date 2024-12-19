import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
<div className='flex justify-center'>
  <div className='  w-[380px] h-[833px] '>

            {/* LOGO */}
    <div className='  flex justify-center mt-10'> 
   <Image src="/logo.png" alt="shose img" width={80} height={50}  />
      </div> 
            {/* TETX */}
    <div className='text-center text-lg mt-3'>
    <ul className=' font-extrabold text-1xl '>
      <h1>BECOME A NIKE MEMBER</h1>
     
    </ul>
  </div>

  <div className='flex justify-center mt-5'>
    <ul className='text-gray-500 '>
    <p>Create Your NIKE Member Profile and get</p>
    <p className='ml-6'>first access to very best of NIKE</p>
    <p  className='ml-5' >products, inspiration and community.</p>
    </ul>
  </div>

    {/* all inputs  */}
              {/* inpute 1  */}
    <div className='mt-3'>
  <div className='  text-center '>
    <input type="Email" placeholder='Email address'  className='border-2   px-10  py-1'/>
  </div>
         
                {/* inpute 2  */}
          <div className='  text-center  mt-5'>
    <input type="password" placeholder='Password' className='border-2 px-10  py-1' />
  </div>

     {/* inpute  3  */}
  <div className='  text-center  mt-5'>
    <input type="text" placeholder='First Name' className='border-2 px-10  py-1' />
  </div>
      {/* inpute  4 */}
  <div className='  text-center  mt-5'>
    <input type="text" placeholder='Last Name' className='border-2 px-10  py-1' />
  </div>
        {/* inpute  5  */}
  <div className='  text-center  mt-5'>
    <input type="text" placeholder='Dare of Birth' className='border-2 px-10  py-1' />
  </div>
  </div>
    
    {/* text */}
<ul className='flex justify-center text-gray-500 text-xs mt-2 mb-1'>
  <p>Get a NIKE Member reward every year Birtday </p>
</ul>

    {/* input 6 */}
<div className='  text-center  mt-5'>
    <input type="text" placeholder='Pakistan' className='border-2 px-10  py-1' />
  </div>
    {/*  inputs  */}
    <div className='flex  justify-center gap-10 mt-2'>
     <div>
     <input type="text"  placeholder='Male'className='w-[120px]  border-2 py-1 text-center' />
    </div>

      {/*  inputs 2   */}
    <div>
    <input type="text" placeholder='Female' className='w-[120px] border-2 py-1 text-center'/>
    </div>
    </div>
       {/*  chackbox  inputs    */}
    <div className='flex justify-center gap-8 my-8'>
  <div className=' flex'>
   <input type="checkbox" />
   {/* text */}
   <p className='ml-2 text-gray-400 text-xs'>Sine up for emale to get updates form NIKE on <br />products, offer and your Member benefits</p>   
  </div>
</div>
   {/* text */}
<div className='mb-4 text-gray-400'>
  <ul className='flex justify-center font-extralight text-xs'>
  <p>By creating an account, you agree to Nike's </p>
  <p className='underline'>Privacy policy</p>
  </ul>
  <ul className='flex justify-center font-extralight  text-xs '>
    <p className='flex  gap-1 '> and <p className='underline'>Terms of use.
  </p></p>
  </ul>
</div>
   
<div className='flex justify-center'>
    <button className='bg-black w-[324px] h-[40px] text-white rounded-md text-xs'>JOIN US</button>
   </div>

   <div className='flex justify-center text-xs  mt-3'>
 <p className='text-gray-400'>Already a Member?  </p>
 <p className='underline ml-1'>Sign in.</p>
 </div>

  </div>
</div>
  )
}

export default page
