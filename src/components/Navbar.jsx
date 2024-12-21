import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    const navList =
        [
            { link: "#", name: "About" },
            { link: "#", name: "Technology" },
            { link: "#", name: "Galaxy" },
            { link: "#", name: "Satelite" },
        ]

    return (
        <div
        data-aos="fade-down"
        className='fixed top-0 right-0
    w-full z-[100] bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
            <div className="container ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white font-bold text-2xl ">
                        <img src={logo} alt="" className='w-10' />
                        <span >TCJ-SPACE</span>
                    </div>
                    <div className='text-white '>
                        <ul className='hidden md:flex items-center gap-6 text-xl py-4 '>
                            {
                                navList.map((value, index) => (
                                    <li key={index}>
                                        <a href={value.link}> {value.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='text-white flex gap-4'>
                        <button className='border-2 border-white px-3 rounded-md py-1'>Login</button>
                        <button className='text-white md:hidden' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <IoClose className='text-4xl' /> : <IoMenu className='text-4xl' />}
                        </button>
                    </div>
                </div>
                {
                    isOpen && (
                        <div className='absolute top-16 right-0 w-[250px] bg-black text-white h-screen  '
                            data-aos="fade-left"
                        >
                            <ul className='flex flex-col gap-5 pl-12 pt-5 text-xl font-medium '>
                                {
                                    navList.map((value, index) => {
                                        return (
                                            <li key={index} className=' tracking-wide'>
                                                <a href={value.link} >{value.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar


// import React, { useState } from 'react';
// import logo from '../assets/logo.png';

// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const navList = [
//         { link: "#", name: "About" },
//         { link: "#", name: "Technology" },
//         { link: "#", name: "Galaxy" },
//         { link: "#", name: "Satellite" },
//     ];

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className='fixed top-0 right-0 w-full z-[100] bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
//             <div className="container">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4 text-white font-bold text-2xl">
//                         <img src={logo} alt="" className='w-10' />
//                         <span>TCJ-SPACE</span>
//                     </div>
//                     <div className='text-white md:hidden'>
//                         <button onClick={toggleMenu} className='focus:outline-none'>
//                             {/* Hamburger Icon */}
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className={`text-white md:flex items-center gap-6 text-xl py-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
//                         <ul className='flex flex-col md:flex-row'>
//                             {
//                                 navList.map((value, index) => (
//                                     <li key={index}>
//                                         <a href={value.link} className='block py-2 md:py-0'>{value.name}</a>
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                     <div className='text-white'>
//                         <button className='border-2 border-white px-3 rounded-md py-1'>Login</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;