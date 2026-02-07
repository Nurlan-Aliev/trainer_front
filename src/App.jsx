import './App.css';
import {Header} from "./component/Header/Header";
import {AuthProvider} from "./hoc/AuthProvider";
import {MultiCircles} from "./component/eyes/eyes";
import {EyeProvider} from "./hoc/Eyes";
import {PushMessageProvider} from "./hoc/PushMessages";
import {myRoutes} from "./routers";

function App() {

    return (
        <PushMessageProvider>
            <AuthProvider>
                <Header/>

                <EyeProvider>
                    <div className="App">
                        <div className="app_left">
                            <MultiCircles/>
                        </div>
                        <div className="app_right">
                            {myRoutes()}
                        </div>
                    </div>
                </EyeProvider>
            </AuthProvider>
        </PushMessageProvider>
    )
}

export default App;
