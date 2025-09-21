import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/main';
import {Header} from "./component/Header/Header";
import {SignIn} from "./pages/auth/signIn";
import {SignUp} from "./pages/auth/signUp";


function App() {

    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign_in" element={<SignIn />} />
                    <Route path="/sign_up" element={<SignUp />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
