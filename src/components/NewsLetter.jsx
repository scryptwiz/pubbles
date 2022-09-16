import { useSelector } from "react-redux"

const NewsLetter = () => {
    const allContent = useSelector(state=>state.mainStore)
    console.log(allContent)
  return (
    <div className="main_width relative">
        {allContent.newsLetter&&(
            <div className="max_width flex z-20 mt-10 lg:p-10 p-5 relative">
                <img src={allContent.newsLetter[0][0].fields.image.fields.file.url} className='z-10 w-96' alt={allContent.newsLetter[0][0].fields.image.fields.title} />
                <div className="ml-auto relative w-10/12 bg-green-600 h-60 my-auto ">
                    <div className="bg-pubblesBlue rounded w-[98.5%] absolute top-0 left-0 z-10 h-[4.7rem]"></div>
                    <div className="bg-pubblesYellow rounded w-[98.5%]  absolute bottom-0 right-0 h-[4.7rem]"></div>
                </div>
            </div>
        )}
    </div>
  )
}

export default NewsLetter