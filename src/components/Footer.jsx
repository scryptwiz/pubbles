import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Footer = () => {
    const allcontent = useSelector(state=>state.mainStore)
  return (
    <div className="main_width relative mt-60 md:mt-0">
        <div className="max_width flex flex-col z-20 mt-10 lg:p-10 p-5 relative gap-3">
            <div className="flex justify-between md:items-center w-full flex-col-reverse md:flex-row gap-2">
                <h1 className="title text-xl md:text-3xl text-pubblesBlue">Join Our Community</h1>
                <Link to='/'><img src="/assets/logos/logo.png" alt="Pubbles Logo" className="h-10" /></Link>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full md:mt-5">
                {allcontent.socials&&(
                    <ul className="flex gap-5 py-2 w-full">
                            {allcontent.socials[0].map((item,index)=>{
                                return(
                                    <li key={index}>
                                        <a href={item.fields.link} target="_blank" rel="noreferrer">
                                            <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} className='w-5 h-5' />
                                        </a>
                                    </li>
                                )
                            })}
                    </ul>
                )}
                <ul className="flex gap-3 flex-col md:flex-row md:items-center md:w-full w-full text-gray-600 text-sm mt-3 md:mt-0">
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