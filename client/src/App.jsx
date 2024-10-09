import { Route, Routes } from "react-router-dom"
import { BlogPage } from "./pages/Blog"
import { Form } from "./components/form/form"
import { More } from "./components/more/more"



export const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<BlogPage/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/more" element={<More/>}/>
      </Routes>
    </div>
  )
}

