import { useSelector } from "react-redux"

const TeamSection = () => {
    const allContent = useSelector(state=>state.mainStore)
  return (
    <div className="main_width relative" id="team">
        <div className="max_width flex flex-col z-20 mt-10 lg:p-10 p-5">
            <h1 className="title text-4xl mx-auto text-pubblesBlue">Team</h1>
            {allContent.team&&(     
                <div className="flex flex-wrap mt-5">
                    {allContent.team[0].map((item,index)=>{
                        return (
                            <div key={index} className="w-1/2 md:w-1/4 flex flex-col items-center justify-center p-3">
                                <div className="w-fit flex flex-col">
                                    <div className="radius bg-pubblesGreen/30 w-20 h-20 mx-auto">{item.fields.image&&(
                                        <img src={item.fields.image.fields.file.url} className='w-full h-full object-cover radius' alt={item.fields.image.fields.title}/> 
                                    )}</div>
                                    <h6 className="title text-center text-pubblesBlue mt-2 ">{item.fields.name}</h6>
                                    <h6 className="dm_font text-center text-sm text-pubblesBlue">{item.fields.role}</h6>
                                </div>
                            </div>
                        ) 
                    })}
                </div>
            )}
        </div>
    </div>
  )
}

export default TeamSection