import { createClient } from "contentful"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import TraitEval from "../components/TraitEval"
import TraitSections from "../components/TraitSections"
import { setAboutSection, setHeroSection, setTraitEvalSection, setTraitImgSection } from "../store/slice"

const MainPage = () => {
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    const getInfo = async () => {
      const client = createClient({
          space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
          accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
        });
        const heroSection  = await client.getEntries({ content_type: "heroSection" })
        const aboutSection  = await client.getEntries({ content_type: "aboutSection" })
        const traitEval  = await client.getEntries({ content_type: "traitEvalSection" })
        const traitImg  = await client.getEntries({ content_type: "traitImage" })
        dispatch(setHeroSection([heroSection.items]))
        dispatch(setAboutSection([aboutSection.items]))
        dispatch(setTraitEvalSection([traitEval.items]))
        dispatch(setTraitImgSection([traitImg.items]))
        setLoader(false)
    }
    getInfo()
  }, [dispatch])
  return (
    <div className="w-full">
      {loader&&(<Loader/>)}
        <Navbar/>
        <HeroSection/>
        <Slider/>
        <AboutSection/>
        <TraitEval/>
        <TraitSections/>
    </div>
  )
}

export default MainPage