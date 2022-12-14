import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Movies";
import NavBar from "./NavBar";
import Sections from "./Sections";
import Seats from "./Seats";
import Sucess from "./Sucess";
import { NoPageFound } from "./NoPageFound";
export default function App() {

    return (

        <Router>
            <GlobalStyle />
            <NavBar />

            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sections/:sectionId" element={<Sections />} />
                <Route path="/seats/:seatsId" element={<Seats />} />
                <Route path="/sucess" element={<Sucess />} />
                <Route path="*" element={<NoPageFound />} />
            </Routes>

        </Router>

    )
}



