import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MobileHeader = () => {
  return (
    <header class="mb-4 flex items-center justify-between py-4 md:py-8">
          
          <a href="/" class="text-black-800 inline-flex items-center gap-2.5 text-3xl font-bold md:text-4xl" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
    
            <h1 className='font-bold'>FARM ひまわり</h1>
          </a>
    
          <Link to="/menu" type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            Menu
          </Link>

          {/* {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-1 z-50">
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">項目1</button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">項目2</button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">項目3</button>
        </div>
      )} */}
          
        </header>
  )
}

export default MobileHeader