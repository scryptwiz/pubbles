import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="main_width relative">
        <div className="max_width flex flex-col z-20 mt-10 lg:p-10 p-5 relative gap-3">
            <div className="flex justify-between md:items-center w-full flex-col-reverse md:flex-row gap-2">
                <h1 className="title text-xl md:text-3xl text-pubblesBlue">Join Our Community</h1>
                <Link to='/'><img src="/assets/logos/logo.png" alt="Pubbles Logo" className="h-10" /></Link>
            </div>
            <div className="flex justify-between items-center w-full">
                <ul className="flex gap-3 flex-col md:flex-row md:items-center text-gray-600 text-sm">
                    <li><a href='#about'>About</a></li>
                    <li><a href='#roadmap'>Roadmap</a></li>
                    <li><a href='#community'>Community</a></li>
                    <li><button>Connect Wallet</button></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer