import { createClient } from "contentful"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import TraitEval from "../components/TraitEval"
import { setAboutSection, setHeroSection, setTraitEvalSection } from "../store/slice"

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
        dispatch(setHeroSection([heroSection.items]))
        dispatch(setAboutSection([aboutSection.items]))
        dispatch(setTraitEvalSection([traitEval.items]))
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
    </div>
  )
}

export default MainPage