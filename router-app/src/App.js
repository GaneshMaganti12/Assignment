import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/login/Login"
import './App.css';
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
