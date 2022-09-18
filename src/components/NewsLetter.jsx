import { useSelector } from "react-redux"

const NewsLetter = () => {
    const allContent = useSelector(state=>state.mainStore)
  return (
    <div className="main_width relative">
        {allContent.newsLetter&&(
            <div className="max_width mt-10 lg:p-10 p-5 relative">
                <div className=" w-full sm:w-1/2 md:w-full mx-auto md:h-fit h-full my-auto  relative">
                    <img src={allContent.newsLetter[0][0].fields.image.fields.file.url} className='z-20 lg:w-80 md:w-72 w-full' alt={allContent.newsLetter[0][0].fields.image.fields.title} />
                    <div className="bg-pubblesYellow blueShadow rounded w-full md:w-[90%] absolute top-1/2 md:top-10 right-0 zindex flex justify-between">
                        <div className="lg:w-8/12 md:w-8/12 w-full py-5 px-5 md:px-10 ml-auto md:mt-0 mt-32">
                            <h1 className="title lg:text-3xl text-2xl text-pubblesBlue">{allContent.newsLetter[0][0].fields.title}</h1>
                            <h1 className="dm_font text-pubblesBlue/80 mt-2">{allContent.newsLetter[0][0].fields.content}</h1>
                            <input type="text" placeholder="Email Here" className="text-pubblesBlue px-4 zindexes  rounded-full w-full py-2  z-40 mt-3 bg-white flex md:hidden" />
                            <button className="btn_shadow_yellow px-5 py-2 rounded-full bg-pubblesYellow text-white mx-auto mt-3 z-40  flex md:hidden">Subscribe</button>
                            <div className="bg-white rounded-full w-full justify-between mt-2 hidden md:flex">
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