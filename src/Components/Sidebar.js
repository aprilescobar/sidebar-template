import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import {SidebarData} from './SidebarData'
import './sidebar.css'
import { IconContext } from 'react-icons'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="sidebar">
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={() => setShowSidebar(!showSidebar)}/>
                    </Link>
                </div>
                <nav className={showSidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={() => setShowSidebar(!showSidebar)}>
                        <li className="sidebar-toggle">
                            <Link to='#' className='menu-bars'>
                                <AiOutlineClose/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index)=> {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
