import './style.css'
import { Outlet } from "react-router-dom"
import { useState } from 'react'
import Header from '../component/header';
import Player from '../component/audioPlayer';


const Layout = () => {
    const [song, setSong] = useState("/Hindi/Malang Sajna.mp3");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <>
            <Header setSong = {setSong} />
            <Outlet />
            <Player song={song} />

        </>
    )
}

export default Layout;