import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { publicRouter } from './routers';
import MainLayout from './layouts';
import * as useSevice from './sevices/currentUserSevice';
function App() {
    const [currentUser, setCurrentUser] = useState([]);
    useEffect(() => {
        useSevice.currentUser().then((res) => {
            setCurrentUser(res);
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((route, index) => {
                        let Layout = MainLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout currentUser={currentUser}>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
