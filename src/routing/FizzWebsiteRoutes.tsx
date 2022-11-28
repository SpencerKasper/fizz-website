import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import UpcomingShowsPage from "../pages/UpcomingShowsPage";

const FizzWebsiteRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about-us' element={<AboutUsPage/>}/>
            <Route path='/upcoming-shows' element={<UpcomingShowsPage/>}/>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default FizzWebsiteRoutes;