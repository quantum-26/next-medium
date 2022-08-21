import Link from 'next/link';
import React from 'react'

function Header() {
  return (
    //  justify to have equal space between child
    //  p-5 padding so that div don't go at end
    //  have max width 7xl 
    //  mx-auto to show in center in case of max width
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5'>
            <Link href="/">
                <img 
                  className='w-44 object-contain cursor-pointer'
                  src="https://links.papareact.com/yvf" alt="" 
                />
            </Link>

            {/* css follow the mobile first so on smaller screen it will be hidden
              and on larger screen it will display
            */}
            <div className='hidden md:inline-flex items-center space-x-5'>
              <h3>About</h3>
              <h3>Contact</h3>
              <h3 
                className='text-white bg-green-600 px-4 py-1 rounded-full'>
                Follow
              </h3>
            </div>
        </div>

        <div  
          className='flex items-center space-x-5 text-green-600'>

          <h3>Sign In</h3>
          <h3 
            className='border px-4 py-1 rounded-full border-green-600'> 
            Get Started</h3>
        </div>
    </header>
  )
}

export default Header;