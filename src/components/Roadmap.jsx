import { useSelector } from "react-redux"

const Roadmap = () => {
  const allContent = useSelector(state=>state.mainStore)
  console.log(allContent)
  return (
    <div className="main_width relative">
        <img src="/assets/images/ellipse.png" className="object-cover w-full h-full absolute top-0 left-0" alt="ellipse" />
        {allContent.roadmap&&(
          <div className="max_width_trait flex flex-col z-20 mt-10 lg:p-10 p-5">
              <h1 className="title text-4xl mx-auto text-pubblesBlue">Roadmap</h1>
              {allContent.roadmap[0].map((item,index)=>{
                return (
                    <img key={index} src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title}/>
                )
              })}
          </div>
        )}
    </div>
  )
}

export default Roadmap