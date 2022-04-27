import React, {useState} from 'react'
import { useRouter } from 'next/router';
import { fa0, faBars, faBarsStaggered, faHome, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const NavBar = () => {
    const [isActive, setIsActive] = useState(true)
    const router = useRouter();

const handleToggle = () =>{
    setIsActive(!isActive)
}
  return (
    <div className='flex flex-col justify-between items-end'>

        <button onClick={handleToggle} className={isActive ? `m-2 text-2xl self-right fixed transform transition-all hover:scale-125 bg-backgroundGray rounded bg-opacity-50` : "hidden"}>
            <FontAwesomeIcon className='text-white h-10 w-10 m-2' icon={faBars} />
        </button>

        <div className={ isActive ? "hidden" : "w-60 md:w-80 shadow-md bg-white h-full px-1 fixed flex flex-col justify-right"}>
            <button onClick={handleToggle} className={isActive ? "hidden" : "m-2 absolute text-2xl self-end transform transition-all hover:scale-125"}>
                <FontAwesomeIcon className='text-black h-10 w-10 ' icon={faX}/>
            </button>
            <ul className="relative mt-16">

                <li className={ router.pathname == "/" ? "relative border-l-4 border-backgroundGray" : "relative"}>
                    <Link href="/">
                        <a onClick={handleToggle} className="flex items-center text-2xl py-6 mt-5 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            Home
                        </a>
                    </Link>
                </li>

                <li className={ router.pathname == "/photoGallery" ? "relative border-l-4 border-backgroundGray" : "relative"}>
                    <Link href="/photoGallery">
                            <a onClick={handleToggle} className="flex items-center text-2xl py-6 mt-5 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                Photo Gallery
                            </a>
                    </Link>
                </li>

                <li className={ router.pathname == "/about" ? "relative border-l-4 border-backgroundGray" : "relative"}>
                    <Link href="/about">
                        <a onClick={handleToggle} className="flex items-center text-2xl py-6 mt-5 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            About Me
                        </a>
                    </Link>
                </li>

                <li className={ router.pathname == "/Contact" ? "relative border-l-4 border-backgroundGray" : "relative"}>                
                    <Link href="/Contact">
                        <a onClick={handleToggle} className="flex items-center text-2xl py-6 mt-5 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        </div>
  )
}

export default NavBar