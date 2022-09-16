import { createClient } from "contentful"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Roadmap from "../components/Roadmap"
import Slider from "../components/Slider"
import TeamSection from "../components/TeamSection"
import TraitEval from "../components/TraitEval"
import TraitSections from "../components/TraitSections"
import { setAboutSection, setHeroSection, setNewsletter, setRoadmap, setTeam, setTraitEvalSection, setTraitImgSection, setTraitMainImgsSection, setTraitsSection } from "../store/slice"

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
        const traitMainImgs  = await client.getEntries({ content_type: "traitsMainImgSection" })
        const traits  = await client.getEntries({ content_type: "traits" })
        const roadmap  = await client.getEntries({ content_type: "roadmap" })
        const team  = await client.getEntries({ content_type: "team" })
        const newsLetter  = await client.getEntries({ content_type: "newsletter" })
        dispatch(setHeroSection([heroSection.items]))
        dispatch(setAboutSection([aboutSection.items]))
        dispatch(setTraitEvalSection([traitEval.items]))
        dispatch(setTraitImgSection([traitImg.items]))
        dispatch(setTraitMainImgsSection([traitMainImgs.items]))
        dispatch(setTraitsSection([traits.items]))
        dispatch(setRoadmap([roadmap.items]))
        dispatch(setTeam([team.items]))
        dispatch(setNewsletter([newsLetter.items]))
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
        <Roadmap/>
        <TeamSection/>
        {/* <NewsLetter/> */}
        <Footer/>
    </div>
  )
}

export default MainPage