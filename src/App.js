import {Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/main';
import {Header} from "./component/Header/Header";
import {SignIn} from "./pages/auth/signIn";
import {SignUp} from "./pages/auth/signUp";
import {LearnWords} from "./pages/learnWord/learnWords";
import {PrivateRoute} from "./hoc/PrivateRoute";
import {AuthProvider} from "./hoc/AuthProvider";
import {TrainList} from "./pages/train/trainList/trainList";
import {Constructor} from "./pages/train/constructor/constructor";
import {Translate} from "./pages/train/translate/translate";
import {RevTranslate} from "./pages/train/translate/revTranslate";
import {MultiCircles} from "./component/eyes/eyes";


function App() {

    return (
        <AuthProvider>

            <Header/>
            <div className="App">
                <div className="app_left">
                    <MultiCircles/>
                </div>

                <div className="app_right">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/sign_in" element={<SignIn />} />
                        <Route path="/sign_up" element={<SignUp />} />
                        <Route path="/learn" element={
                            <PrivateRoute >
                                <LearnWords />
                            </PrivateRoute>
                        }/>
                        <Route path="/train_list" element={
                            <PrivateRoute >
                                <TrainList />
                            </PrivateRoute>
                        }/>

                        <Route path="/constructor" element={
                            <PrivateRoute >
                                <Constructor />
                            </PrivateRoute>
                        }/>
                        <Route path="/translate" element={
                            <PrivateRoute >
                                <Translate />
                            </PrivateRoute>
                        }/>
                        <Route path="/rev_translate" element={
                            <PrivateRoute >
                                <RevTranslate />
                            </PrivateRoute>
                        }/>

                    </Routes>
                </div>

            </div>
        </AuthProvider>
    )
}

export default App;
