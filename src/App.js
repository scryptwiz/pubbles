import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import { Store } from "./store/store"

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App