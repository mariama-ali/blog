import "./sidebar.css"
import React from 'react'
import sidebarImg  from "../../assets/img/sidebar.jpg"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={sidebarImg} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Beatae quasi, harum vel fugit unde debitis nobis aliquid commodi.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Flim</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <ul className="sidebarSocial">
               <i className="sidebarIcon fab fa-facebook-f"></i>
               <i className="sidebarIcon fab fa-twitter"></i>
               <i className="sidebarIcon fab fa-instagram"></i>
               <i className="sidebarIcon fab fa-discord"></i>
            </ul>
            </div>
        </div>
    )
}
