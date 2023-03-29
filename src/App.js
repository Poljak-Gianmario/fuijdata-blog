import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import SinglePost from "./pages/SinglePost"
import Error from "./pages/Error"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/" element={<Homepage/>}exact/>

        <Route path="/blog/:slug" element={<SinglePost/>}/> #in caso di errori rivedere min 39

        <Route path="/blog" element={<Blog/>}/>

        <Route path="*" element={<Error />}/>
          
      </Routes>
    </BrowserRouter>

  );
}

export default App;
