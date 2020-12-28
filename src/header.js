import React,{useState} from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'




function Header() {

    const [inputSearch,setInputSearch]=useState(" ")

    function handleChange(e){
        setInputSearch(e.target.value)
    }

    return (
        <div className="header">
                    <div className="header-left">
                    <MenuIcon/>

                        <Link to="/">
                    <img
                    className="header-logo" 
                    src="https://havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new.jpg" alt="youtube-logo"/>
                        </Link>
                    </div>
                    
                    <div className="header-input">
                    <input type="text"  placeholder="Search" value={inputSearch} onChange={handleChange}/>
                        <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-inputButton"/>
                        </Link>
                    </div>

                    <div className="header-icons">
                    <VideoCallIcon className="header-icon"/>
                    <AppsIcon className="header-icon"/>
                    <NotificationsIcon className="header-icon"/>
                    <AccountCircleIcon className="header-icon"/>
                    </div>



            </div>
    )
}

export default Header
