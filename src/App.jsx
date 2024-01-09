// import Navbar from "./components/Navbar"
// import Sidebar from "./components/Sidebar"
// import MainContainer from "./components/MainContainer"
import Sidebar from "./components/SideNav/SideNav"
import MainContainer from "./components/Main/Main"

function App() {


  return (

      <div className="min-h-screen max-h-fit bg-[#FAFAFA] flex w-screen">
        <Sidebar />
        <MainContainer />
    </div>
    
  )
}

export default App
