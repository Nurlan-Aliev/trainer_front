import {Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/main';
import {Header} from "./component/Header/Header";
import {SignIn} from "./pages/auth/signIn";
import {SignUp} from "./pages/auth/signUp";
import {LearnWords} from "./pages/learnWord/learnWords";
import {PrivateRoute} from "./hoc/PrivateRoute";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign_in" element={<SignIn />} />
                <Route path="/sign_up" element={<SignUp />} />
                <Route path="/learn" element={
                    <PrivateRoute >
                        <LearnWords />
                    </PrivateRoute>
                }/>
            </Routes>
        </>
    )
}

export default App;
