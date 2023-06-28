import './App.css';
import {sentInfoAboutUser} from "./services/user";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Main} from "./pages/Main/Main";
import {Products} from "./pages/Products/Products";
import {Basket} from "./pages/Basket/Basket";
import ResponsiveAppBar from "./Navbar";

function App() {
    sentInfoAboutUser();

    return (
        <div className="App">
            <ResponsiveAppBar/>
           <Router>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
