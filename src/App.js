import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import AuthProvider from "./context/AuthProvider";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/details/:id" element={<Details />} />
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
