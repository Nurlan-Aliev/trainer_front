import {Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/main';
import {Header} from "./component/Header/Header";
import {SignIn} from "./pages/auth/signIn";
import {SignUp} from "./pages/auth/signUp";
import {LearnWords} from "./pages/learnWord/learnWords";
import {PrivateRoute} from "./hoc/PrivateRoute";
import {AuthProvider} from "./hoc/AuthProvider";
import {NotAuthRouters} from "./hoc/NotAuthRouters";

function App() {

    return (
        <AuthProvider>

            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/sign_in" element={
                    <NotAuthRouters>
                        <SignIn />
                    </NotAuthRouters>
                    } />
                <Route path="/sign_up" element={
                    <NotAuthRouters>
                        <SignUp />
                    </NotAuthRouters>} />

                <Route path="/learn" element={
                    <PrivateRoute >
                        <LearnWords />
                    </PrivateRoute>
                }/>
            </Routes>
        </AuthProvider>
    )
}

export default App;
