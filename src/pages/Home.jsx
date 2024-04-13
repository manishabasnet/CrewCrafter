import React from "react";
import HomeCSS from "./Home.module.css";

const Home = () => {
    return (
        <div className={HomeCSS.container}>
            <div className={HomeCSS.content}>
                <h2 className={HomeCSS.headerName}>Welcome to CrewCrafter</h2>
                <p>Create and Edit you crew. Give it a personal touch.</p>
            </div>
        </div>
    );
};

export default Home;
