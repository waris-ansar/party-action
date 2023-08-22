import React from 'react';
import Image from 'next/image';

function Header({active, setActiveSection}) {
  return (
    <header className='main-header items-center justify-between border-r border-white h-full w-[81px] relative z-[1] pt-6'>
      <div className="logo h-9 w-9 m-auto">
        <Image src={"/assets/images/logo.svg"} height={0} width={0} alt='logo' style={{width: "100%"}} />
      </div>
      <button className='home-Promt absolute top-0 left-0 w-20 h-full cursor-pointer' onClick={() => setActiveSection('home')}></button>
    </header>
  )
}
export default Header
