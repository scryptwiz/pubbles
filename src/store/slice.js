import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    heroSection:false,
    aboutSection:false,
    traitEvalSection:false,
    traitImgSection:false ,
    traitMainImgs:false ,
    traits:false,
    roadmap:false,
    team:false,
    newsLetter:false,
    slider:false,
    socials:false
}

export const Slice = createSlice({
    name: 'mainStore',
    initialState,
    reducers:{
        setHeroSection: ( state, action ) => { state.heroSection = { ...state.heroSection, ...action.payload } },
        setAboutSection: ( state, action ) => { state.aboutSection = { ...state.aboutSection, ...action.payload } },
        setTraitEvalSection: ( state, action ) => { state.traitEvalSection = { ...state.traitEvalSection, ...action.payload } },
        setTraitImgSection: ( state, action ) => { state.traitImgSection = { ...state.traitImgSection, ...action.payload } },
        setTraitMainImgsSection: ( state, action ) => { state.traitMainImgs = { ...state.traitMainImgs, ...action.payload } },
        setTraitsSection: ( state, action ) => { state.traits = { ...state.traits, ...action.payload } },
        setRoadmap: ( state, action ) => { state.roadmap = { ...state.roadmap, ...action.payload } },
        setTeam: ( state, action ) => { state.team = { ...state.team, ...action.payload } },
        setNewsletter: ( state, action ) => { state.newsLetter = { ...state.newsLetter, ...action.payload } },
        setSlider: ( state, action ) => { state.slider = { ...state.slider, ...action.payload } },
        setSocials: ( state, action ) => { state.socials = { ...state.socials, ...action.payload } },
    }
})

export const { setHeroSection, setAboutSection, setTraitEvalSection, setTraitImgSection, setTraitMainImgsSection, setTraitsSection, setRoadmap, setTeam, setNewsletter, setSlider,setSocials } =  Slice.actions
export default Slice.reducer