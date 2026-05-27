import './App.css';
import { Header } from "./component/Header/Header";
import { AuthProvider } from "./hoc/AuthProvider";
import { PushMessageProvider } from "./hoc/PushMessages";
import { myRoutes } from "./routers";

function App() {

    return (
        <PushMessageProvider>
            <AuthProvider>
                <Header />
                <div className="App">
                    {myRoutes()}
                </div>
            </AuthProvider>
        </PushMessageProvider>
    )
}

export default App;
