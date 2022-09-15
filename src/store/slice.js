import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    heroSection:false,
    aboutSection:false,
    traitEvalSection:false,
    traitImgSection:false 
}

export const Slice = createSlice({
    name: 'mainStore',
    initialState,
    reducers:{
        setHeroSection: ( state, action ) => { state.heroSection = { ...state.heroSection, ...action.payload } },
        setAboutSection: ( state, action ) => { state.aboutSection = { ...state.aboutSection, ...action.payload } },
        setTraitEvalSection: ( state, action ) => { state.traitEvalSection = { ...state.traitEvalSection, ...action.payload } },
        setTraitImgSection: ( state, action ) => { state.traitImgSection = { ...state.traitImgSection, ...action.payload } },
    }
})

export const { setHeroSection, setAboutSection, setTraitEvalSection, setTraitImgSection } =  Slice.actions
export default Slice.reducer