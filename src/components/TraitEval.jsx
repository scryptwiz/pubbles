import { useSelector } from "react-redux"

const TraitEval = () => {
  const traitEvaluation = useSelector(state=>state.mainStore)
  return (
    <div className="main_width px-5 py-7">
        <div className="max_width flex">
          {traitEvaluation.traitEvalSection&&(
            <div className="w-full">
                <div className="w-full lg:max-w-2xl mx-auto relative h-20 flex">
                    <div className="bg-pubblesBlue rounded w-[98.5%] absolute top-0 left-0 z-10 h-[4.7rem]"></div>
                    <div className="bg-pubblesYellow rounded w-[98.5%]  absolute bottom-0 right-0 h-[4.7rem]"></div>
                    {traitEvaluation.traitEvalSection[0].map((item,index)=>{
                        return  (
                          <div key={index} className="w-1/3 h-full flex-col  flex justify-center items-center z-30 text-white">
                              <h1 className="title text-xl sm:text-3xl">{item.fields.number}</h1>
                              <h1 className="dm_font text-xs sm:text-sm">{item.fields.title}</h1>
                          </div>
                        )
                    })}
                </div>
                {traitEvaluation.traitImgSection[0].map((item,index)=>{
                  return (
                    <div key={index} className="w-full lg:max-w-2xl flex-col  gap-7 mx-auto flex mt-16">
                        <img src={item.fields.image.fields.file.url} className='w-full' alt={item.fields.image.fields.title} />
                        <button className="w-fit mx-auto px-10 py-2 text-white bg-pubblesYellow rounded-full btn_shadow_yellow font-medium text-xl">Explore</button>
                    </div>
                  )
                })}
            </div>
          )}
        </div>
    </div>
  )
}

export default TraitEval