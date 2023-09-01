//componentes
import Header from "./components/Header"
import Search from "./components/Search"
import CardUser from "./components/CardUser"

//Hooks
import { useState } from "react"

function App() {
  const [IsligthMode, setIsligthMode] = useState(false)
  //Contiene el objeto del usuario
  const [User, setUser] = useState()


  
  return (
    <div className="w-full flex flex-col justify-center items-center mb-10 md:min-w-[900px] max-w-[900px]">
        <Header setIsligthMode={setIsligthMode} IsligthMode={IsligthMode}/>
        <Search setUser={setUser}/>
        <CardUser user={User}/>
    </div>
  )
}

export default App
