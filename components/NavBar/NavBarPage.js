 import { useState } from 'react'
 const NavBarPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <div class="bg-gradient-to-r from-green-400 to-blue-500">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
          <div class="relative flex grid items-center ">
       
            <a
              href="/"
              aria-label="BEINGFAME"
              title="Company"
              class="inline-flex items-center lg:mx-auto"
            >
         
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
               Being Fame
              </span>
            </a>
   
         </div>
        </div>
      </div>
    );
  };

  export default NavBarPage;