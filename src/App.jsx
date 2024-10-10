import { useState } from "react"
import LeftMenu from "./components/LeftMenu"
import TopMenu from "./components/TopMenu"
import UploadVideo from "./components/UploadVideo"
import { Route, Routes } from "react-router-dom"
import MainScreen from "./components/MainScreen"
import Watch from "./components/Watch"
import History from "./components/History"
import WatchList from "./components/WatchList"

const App = () => {

  const [uploadShow, setUploadShow] = useState(false)

  return (
    <div className=" w-[100vw] h-[100vh] p-[2vw] ">
      <TopMenu setShow={setUploadShow} />

      <aside className="flex justify-between mt-[2vw]">
        <LeftMenu />

        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="history" element={<History />} />
          <Route path="saved" element={<WatchList />} />
        </Routes>
      </aside>


      <UploadVideo show={uploadShow} setShow={setUploadShow} />
    </div>
  )
}

export default App
