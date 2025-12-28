import './App.css';
import {Header} from "./component/Header/Header";
import {AuthProvider} from "./hoc/AuthProvider";
import {MultiCircles} from "./component/eyes/eyes";
import {EyeProvider} from "./hoc/Eyes";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import {SignIn} from "./pages/auth/signIn";
import {SignUp} from "./pages/auth/signUp";
import {PrivateRoute} from "./hoc/PrivateRoute";
import {LearnWords} from "./pages/learnWord/learnWords";
import {TrainList} from "./pages/train/trainList/trainList";
import {Constructor} from "./pages/train/constructor/constructor";
import {Translate} from "./pages/train/translate/translate";
import {RevTranslate} from "./pages/train/translate/revTranslate";
import {Remember} from "./pages/train/remember/remember";
import {EditWord} from "./pages/addEditWord/editWord";
import {AddWord} from "./pages/addEditWord/addWord";

function App() {

    return (
        <AuthProvider>
            <Header/>

            <EyeProvider>
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
                            <Route path="/remember" element={
                                <PrivateRoute >
                                    <Remember />
                                </PrivateRoute>
                            }/>

                            <Route path='/edit/:id' element={
                                <PrivateRoute >
                                    <EditWord />
                                </PrivateRoute>
                            }/>
                            <Route path='/add_new_word' element={
                                <PrivateRoute >
                                    <AddWord />
                                </PrivateRoute>
                            }/>

                        </Routes>
                    </div>
                </div>
            </EyeProvider>
        </AuthProvider>
    )
}

export default App;
