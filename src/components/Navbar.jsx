import { Link } from "react-router-dom"
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className="main_width">
            <nav className="max_width px-5 py-5 lg:px-0 flex justify-between items-center">
                <Link to='/'><img src="/assets/logos/logo.png" className="lg:h-7 h-6" alt="Pubbles Logo" /></Link>
                <ul className="sm:flex items-center gap-5 hidden text-sm text-pubblesBlue">
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Roadmap</Link></li>
                    <li><Link to='/'>Community</Link></li>
                </ul>
                <button className="bg-pubblesGreen px-5 py-2 text-white hidden sm:inline-flex rounded text-sm">Connect Wallet</button>
                {!toggle&&(<BiMenuAltRight onClick={()=>setToggle(true)} className="text-3xl text-pubblesBlue sm:hidden inline-flex"/>)}
                {toggle&&(
                    <div className="fixed top-0 left-0 z-40 w-full h-screen sm:hidden flex">
                        <div className="w-10/12 bg-white flex flex-col items-start gap-10  px-5 py-7 h-full">
                            <img src="/assets/logos/logo.png" alt="Pubbles Logo" className="h-6" />
                            <ul className="flex flex-col  gap-5 text-sm text-pubblesBlue">
                                <li onClick={()=>setToggle(false)}><a href='#about'>About</a></li>
                                <li onClick={()=>setToggle(false)}><a href='#roadmap'>Roadmap</a></li>
                                <li onClick={()=>setToggle(false)}><a href='#community'>Community</a></li>
                                <button onClick={()=>setToggle(false)} className="bg-pubblesGreen px-5 py-2 text-white rounded text-sm">Connect Wallet</button>
                            </ul>
                        </div>
                        <div className="w-2/12 bg-black/10 flex justify-center py-7">
                            <AiOutlineClose onClick={()=>setToggle(false)} className="text-2xl text-pubblesBlue"/>
                        </div>
                    </div>
                )}
            </nav>
    </div>
  )
}

export default Navbar