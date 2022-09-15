import { useSelector } from "react-redux"

const AboutSection = () => {
    const about = useSelector(state=>state.mainStore)
  return (
    <div className="main_width px-5 py-10">
        {about.aboutSection&&(
            <div className="max_width flex">
                {about.aboutSection[0].map((item,index)=>{
                    return (
                        <div key={index} className="w-full md:max-w-lg lg:max-w-2xl mx-auto text-center">
                            <h1 className="text-3xl md:text-4xl text-pubblesBlue w-full title">{item.fields.title}</h1>
                            <div className='mt-3 flex flex-col gap-2'>
                                {item.fields.content.map((item,index)=>{
                                    return (
                                        <p key={index} className="text-pubblesBlue md:text-sm text-xs w-full">{item.section}</p>
                                        )
                                    })}
                                <button className="mt-5 rounded-full px-10 py-2.5 w-fit mx-auto text-xl font-semibold text-white bg-pubblesGreen btn_shadow">Explore</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )}
    </div>
  )
}

export default AboutSection