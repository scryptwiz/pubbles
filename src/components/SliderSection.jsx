import { useSelector } from "react-redux"
import Slider from "react-slick";

const SliderSection = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 700,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          infinite: true,
          autoplay: true,
          speed: 700,
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          infinite: true,
          slidesToShow: 3,
          speed:700,
        }
      }
    ]
  };
  const allContent = useSelector(state=>state.mainStore)
  return (
        <div className="main_width px-5 py-10   ">
            <div className="max_width flex">
              {allContent.slider&&(
                <Slider className="w-full mx-auto" {...settings}>
                  {allContent.slider[0].map((item,index)=>{
                    return (
                      <div key={index} className="w-20 lg:h-32 h-20 rounded-lg p-2">
                        <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} className="w-full h-full object-cover rounded" />
                      </div>
                    )
                  })}
                </Slider>
              )}
            </div>
        </div>
  )
}

export default SliderSection