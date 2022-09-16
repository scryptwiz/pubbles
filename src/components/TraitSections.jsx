import { useSelector } from "react-redux"

const TraitSections = () => {
    const allContent = useSelector(state=>state.mainStore)
  return (
    <div className="main_width px-5 py-10">
        <div className="max_width_trait flex flex-col">
            <h1 className="title text-pubblesBlue mx-auto text-4xl">Traits</h1>
            <div className="mt-7 flex justify-between items-center">
                <div className="w-full md:w-1/2">
                    <p className="md:text-sm lg:max-w-sm  text-xs text-pubblesBlue w-full">Building a thriving community that gives back through supporting girls and empowering</p>
                    {allContent.traits&&(
                        <div className="w-full flex flex-wrap mt-10">
                            {allContent.traits[0].map((item,index)=>{
                                return (
                                <div key={index} className="md:w-1/3 flex w-1/2 gap-3 p-2">
                                    <div className="w-12 h-12 rounded-full bg-pubblesLightGreen/20">{item.fields.image&&(
                                        <img src={item.fields.image.fields.file.url} className='w-full h-full object-cover rounded-full' alt={item.fields.image.fields.title} />
                                    )}</div>
                                    <div className="flex flex-col">
                                        <h2 className="title text-2xl font-semibold text-pubblesBlue">{item.fields.value}</h2>
                                        <p className="dm_font text-pubblesBlue break-all">{item.fields.trait}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    )}
                </div>
                {allContent.traitMainImgs&&(
                    <div className="hidden md:flex flex-col gap-5 lg:w-80 md:w-1/2 p-5">
                        <div className="w-full">
                            <img src={allContent.traitMainImgs[0][0].fields.image.fields.file.url}  alt={allContent.traitMainImgs[0][0].fields.image.fields.titlel} className='w-full' />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-1/2 pr-5">
                                <img src={allContent.traitMainImgs[0][1].fields.image.fields.file.url}  alt={allContent.traitMainImgs[0][1].fields.image.fields.titlel} className='w-full' />
                            </div>
                            <div className="w-1/2 pl-5">
                                <img src={allContent.traitMainImgs[0][2].fields.image.fields.file.url}  alt={allContent.traitMainImgs[0][2].fields.image.fields.titlel} className='w-full' />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default TraitSections