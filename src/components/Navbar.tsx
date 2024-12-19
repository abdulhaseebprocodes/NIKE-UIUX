
import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <header>
        <nav >
                 <div className='flex justify-end flex-wrap bg-gray-50 '>
                    
                    

                      <ul className='flex flex-wrap gap-4 max-w-[400px] mt-1 font-thin-4 mr-4'>
                          <li><Link href="/All-product">Find a Store</Link> </li>
                           <h1>|</h1>
                           <li> <Link href="/" >Help</Link> </li>
                           <h1>|</h1>
                           <li> <Link href="/Joine-page">Join Us</Link></li>
                           <h1>|</h1>
                           <li><Link href="/Login-page">Sign in</Link></li>
                      </ul>
                 </div>

                   {/* second section */}
                  
                 <div className= 'flex flex-wrap justify-between hd-[60px] '>
                    <div className=' w-[100px] flex justify-center '>
                     <img src="logo.png" alt="img" className=' max-h-[35px] mt-3' />
                    </div>


                     <div>
                     <ul className='flex flex-wrap gap-6 mt-5 font-500 ml-64'>
                            <li><Link href="/">New & Featured</Link> </li>
                            <li><Link href="/All-product">Men</Link> </li>
                           <li><Link href="/All-product">Women</Link> </li>
                          <li><Link href="/All-product">Kids</Link> Kids</li>
                          <li><Link href="/All-product">Sale</Link> Sale</li>
                          <li> <Link href="/All-product">SNKRS</Link> </li>
                            </ul> 
                     </div>

                     <div className=' flex   w-[300px]  '>
                     
                    <input type="search" placeholder='search'  className='rounded-3xl h-[35px] w-[150px] bg-gray-200 mt-2'/>
                <img src="w-hart.jpg" alt="jnfjvnf"  className='h-8 w-8 mt-2 ml-4'/>
                <img src="bag.jpg" alt="fvf" className='h-8 w-8 mt-2 ml-4' />
 {/* <Image src="/w-hart.jpg" alt="shose img" width={10} height={10}  /> */}
                     </div>
                 </div>

        </nav> 
    </header>
  )
}

export default Navbar


