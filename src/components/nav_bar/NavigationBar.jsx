import React, {useState} from 'react';
import "./NavigationBar.css"
import Star from "../../assets/star.svg"
import {Link} from "react-router-dom";

const NavigationBar = ({currentPage, onChange}) => {
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);


    const handlePageClick = (page) => {
        onChange(page);

        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
            onChange("none")
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };


    return (
        <>
            <button className="hamburger-btn" onClick={toggleSidebar}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>
            <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>

            <ul className="nav-items">
                <li className={`nav-item ${currentPage === "EXPLORE" ? "active" : ""}`}>
                    <Link  to={"/explore"} onClick={() => handlePageClick("EXPLORE")}>EXPLORE</Link>
                    {currentPage === "EXPLORE" && <span className="arrow"><img src={Star} alt={"star"}/></span>}
                </li>
                <li className={`nav-item ${currentPage === "PROFILE" ? "active" : ""}`}>
                    <Link to={"/profile"}  onClick={() => handlePageClick("PROFILE")}>PROFILE</Link>
                    {currentPage === "PROFILE" && <span className="arrow"><img src={Star} alt={"star"}/> </span>}
                </li>
                <li className={`nav-item ${currentPage === "FRIENDS" ? "active" : ""}`}>
                    <Link to={"/friends"} onClick={() => handlePageClick("FRIENDS")}>FRIENDS</Link>
                    {currentPage === "FRIENDS" && <span className="arrow"><img src={Star} alt={"star"}/></span>}
                </li>
                {/*<li className={`nav-item ${currentPage === "LEADERBOARDS" ? "active" : ""}`}>*/}
                {/*    <a href="#" onClick={() => handlePageClick("LEADERBOARDS")}>RANKING</a>*/}
                {/*    {currentPage === "LEADERBOARDS" && <span className="arrow"><img src={Star} alt={"star"}/></span>}*/}
                {/*</li>*/}

                {/*<li  className={`nav-item ${currentPage === "SHOP" ? "active" : ""}`}>*/}
                {/*    <a href="#" onClick={() => handlePageClick("SHOP")}>SHOP</a>*/}
                {/*    {currentPage === "SHOP" && <span className="arrow"><img src={Star} alt={"star"}/></span>}*/}
                {/*</li>*/}
                {/*<li className={`nav-item ${currentPage === "F.A.Q" ? "active" : ""}`}>*/}
                {/*    <a href="#" onClick={() => handlePageClick("F.A.Q")}>F.A.Q</a>*/}
                {/*    {currentPage === "F.A.Q" && <span className="arrow"><img src={Star} alt={"star"}/></span>}*/}
                {/*</li>*/}
                <li className={`nav-item ${currentPage === "CONTACT US" ? "active" : ""}`}>
                    <Link to={"/contact"} onClick={() => handlePageClick("CONTACT US")}>CONTACT</Link>
                    {currentPage === "CONTACT US" && <span className="arrow"><img src={Star} alt={"star"}/></span>}
                </li>
            </ul>
        </nav>
        </>
    );
};


export default NavigationBar;

