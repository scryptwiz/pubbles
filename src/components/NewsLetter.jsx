import { useSelector } from "react-redux"

const NewsLetter = () => {
    const allContent = useSelector(state=>state.mainStore)
  return (
    <div className="main_width relative">
        {allContent.newsLetter&&(
            <div className="max_width hidden  md:flex z-20 mt-10 lg:p-10 p-5 relative">
                <div className=" w-full h-fit my-auto  relative">
                    <img src={allContent.newsLetter[0][0].fields.image.fields.file.url} className='z-20 lg:w-80 w-72' alt={allContent.newsLetter[0][0].fields.image.fields.title} />
                    <div className="bg-pubblesYellow blueShadow rounded w-[90%] absolute top-10 right-0 zindex flex justify-between">
                        <div className="lg:w-8/12 w-8/12 py-5 px-10 ml-auto">
                            <h1 className="title lg:text-3xl text-2xl text-pubblesBlue">{allContent.newsLetter[0][0].fields.title}</h1>
                            <h1 className="dm_font text-pubblesBlue/80 mt-2">{allContent.newsLetter[0][0].fields.content}</h1>
                            <div className="bg-white rounded-full w-full flex justify-between mt-2">
                                    <input type="text" placeholder="Email Here" className="text-pubblesBlue px-4 z-40 zindexes  rounded-full w-full py-2" />
                                    <button className="btn_shadow_yellow px-5 py-2 rounded-full bg-pubblesYellow text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default NewsLetter