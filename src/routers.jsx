import {Routes, Route} from "react-router-dom";
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

export function myRoutes() {
    return (
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

        </Routes>
    )
}