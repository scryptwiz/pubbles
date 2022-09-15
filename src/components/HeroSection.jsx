import { useSelector } from "react-redux"
const HeroSection = () => {
  const heroContent = useSelector(state=>state.mainStore)
  return (
    <div className="main_width px-5">
      {heroContent.heroSection&&(
        <div className="max_width flex">
          {heroContent.heroSection[0].map((item,index)=>{
            return (
            <div key={index} className="w-full h-fit rounded-xl flex relative">
              <img src={item.fields.backgroundImage.fields.file.url}  alt={item.fields.backgroundImage.fields.title} className="w-full h-full absolute top-0 left-0 object-cover rounded-xl" />
              <div className="sm:px-10 px-3 z-10 sm:h-72 lg:h-96 h-full w-full flex">
                <div className="my-auto h-fit py-5 flex flex-col md:gap-3 gap-2 sm:w-1/2 w-full">
                  <h1 className="text-white title md:text-5xl lg:text-6xl sm:text-4xl text-2xl">{item.fields.title} </h1>
                  <p className="text-sm dm_font text-white/80 lg:text-base">{item.fields.content}</p>
                  <span className="flex gap-7 items-center">
                    <button className="rounded-full px-7 text-sm  py-2 bg-pubblesGreen text-white">Explore</button>
                    <button className="outline-none text-sm bg-transparent underline text-white">Connect Wallet</button>
                  </span>
                </div>
                <div className="sm:flex hidden sm:w-1/2 items-center justify-center">
                    <img src={item.fields.image.fields.file.url}  alt={item.fields.image.fields.title}   className="mx-auto h-full" />
                </div>
              </div>
            </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HeroSection