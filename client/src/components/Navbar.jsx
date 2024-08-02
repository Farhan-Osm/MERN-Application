import { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

// react icon
import { FaReadme } from 'react-icons/fa';
import {AiOutlineAlignRight,AiOutlineClose} from 'react-icons/ai';
import { AuthContext } from '../contact/AuthProvider';

const Navbar = () => {

    const [isMenuopen,setIsMenuOpen] = useState(false);
    const [isSticky,setIsSticky] = useState(false);

    const {user} = useContext(AuthContext);
    console.log(user);

    //  toggle menu

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuopen);
    };

    useEffect(() =>{
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

    },[]);

    // nav Items here

    const navItmes = [
        {link: 'Home', path: "/"},
        {link: 'Shop', path: "/shop"},
        {link: 'About', path: "/about"},
        {link: 'Sell Your Book', path: "/admin/dashboard"},
        // {link: 'Blog', path: "/blog"},
    ]


  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-7 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-teal-100' : ''}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/* logo */}
                <Link to='/' className='text 2xl font-bold text-blue-700 flex items-center gap-2'><FaReadme className='text-3xl inline-block'/>Books</Link>

                {/* nav items to large devices */}
                
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItmes.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-900'>{link}</Link>)
                    }
                </ul>
                {/* button for lg devices */}

                {/* <div className='space-x-12 hidden lg:flex items-center'>
                    <button><AiOutlineAlignRight className='w-5 hover:text-blue-700'/></button>
                </div> */}

                {/* menu button for the mobile devices */}

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {isMenuopen ? <AiOutlineClose className='h-5 w-5 text-black'/>:<AiOutlineAlignRight className='h-5 w-5 text-black'/>}
                    </button>
                </div>
            </div> 

            {/* nav items for sm devices  */}   
            
            <div className={`space-y-4 px-4 mt-20 py-10 bg-teal-700 ${isMenuopen ? 'block fixed top-0 right-0 left-0':'hidden'}`}>
                {
                    navItmes.map(({link, path}) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-yellow-400'>{link}</Link>)  
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar