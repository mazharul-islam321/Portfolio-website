import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./components/NotFound/NotFound";
import Blogs from "./components/Blogs/Blogs";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
