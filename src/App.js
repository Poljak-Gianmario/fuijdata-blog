import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import SinglePost from "./pages/SinglePost"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/home" element={<Homepage/>}exact/>

        <Route path="/blog/:slug" element={<SinglePost/>}/> 

        <Route path="/blog" element={<Blog/>}/>

        <Route path="*" element={<Error />}/>
          
      </Routes>
    </BrowserRouter>

  );
}

export default App;
