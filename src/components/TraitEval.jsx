import { useSelector } from "react-redux"

const TraitEval = () => {
  const traitEvaluation = useSelector(state=>state.mainStore)
  return (
    <div className="main_width md:py-7 flex-col">
        <div className="max_width flex px-5">
          {traitEvaluation.traitEvalSection&&(
            <div className="w-full">
                <div className="w-full lg:max-w-2xl mx-auto relative flex">
                    <div className="bg-pubblesBlue rounded md:w-full mx-auto  z-10 flex yellowShadow h-fit  py-10 md:py-7 flex-col md:flex-row items-center gap-5 md:gap-0 w-fit px-10 md:px-0">
                      {traitEvaluation.traitEvalSection[0].map((item,index)=>{
                          return  (
                            <div key={index} className="w-1/3 h-full flex-col  flex justify-center items-center z-30 text-white">
                                <h1 className="title text-2xl sm:text-3xl">{item.fields.number}</h1>
                                <h1 className="dm_font text-xs sm:text-sm">{item.fields.title}</h1>
                            </div>
                          )
                      })}
                    </div>
                </div>
            </div>
          )}
        </div>
        {traitEvaluation.traitEvalSection&&(
          <div>
            {traitEvaluation.traitImgSection[0].map((item,index)=>{
                      return (
                        <div key={index} className="w-full lg:max-w-2xl flex-col  gap-7 mx-auto flex mt-16">
                            <img src={item.fields.image.fields.file.url} className='w-full hidden md:inline-flex' alt={item.fields.image.fields.title} />
                            <img src={item.fields.mobileImage.fields.file.url} className='w-full flex md:hidden' alt={item.fields.mobileImage.fields.title} />
                            <button className="w-fit mx-auto px-10 py-2 text-white bg-pubblesYellow rounded-full btn_shadow_yellow font-medium text-xl">Explore</button>
                        </div>
                      )
                    })}
          </div>
        )}
    </div>
  )
}

export default TraitEval