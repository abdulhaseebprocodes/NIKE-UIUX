import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex justify-center'>

<div className='w-[380px] h-[489px] ' >

   {/* logo */}
  <div className='  flex justify-center mt-10'> 
 <Image src="/logo.png" alt="shose img" width={80} height={50}  />
  </div>
    {/* text */}
  <div className='text-center'>
    <ul className=' font-extrabold text-1xl'>
      <h1>YOUR ACCOUNT</h1>
      <h1>FOR EVRYTHING</h1>
      <h1>NIKE</h1>
    </ul>
  </div>

       {/* inpute 1 */}
<div className='mt-3'>
  <div className='  text-center '>
    <input type="Email" placeholder='Email address'  className='border-2   px-10  py-1'/>
  </div>
         
                {/* inpute  */}
          <div className='  text-center  mt-5'>
    <input type="password" placeholder='Password' className='border-2 px-10  py-1' />
  </div>
  </div>
                {/* inout chackbox and text */}
<div className='flex justify-center gap-8 my-8'>
  <div className=' flex'>
   <input type="checkbox" />
   <p className='ml-2 font-extralight text-xs'>keep me signe in</p>
   
  </div>

  <div className=''>
    <p className='font-extralight text-xs'>Forgotten your password?</p>
  </div>
</div>

<div className='mb-4'>
  <ul className='flex justify-center font-extralight text-xs'>
  <p>By logging, you agree to Nike </p>
  <p className='underline'>Privacy policy</p>
  </ul>
  <ul className='flex justify-center font-extralight  text-xs '>
    <p className='flex '> and <p className='underline'>Terms of use</p></p>
  </ul>
</div>

             {/* button  */}
   <div className='flex justify-center'>
    <button className='bg-black w-[324px] h-[40px] text-white rounded-md text-xs'>SIGN IN</button>
   </div>
             {/* text */}
 <div className='flex justify-center text-xs font-extralight mt-3'>
 <p>NOT A Member?  </p>
 <p className='underline ml-1'>join us</p>
 </div>
</div>              
    </div>
  )
}

export default page

