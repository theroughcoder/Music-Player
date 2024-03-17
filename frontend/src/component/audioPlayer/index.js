
import "./style.css";
import React, { useEffect, useRef } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Player = (props) => {
    const playRef = useRef();

    useEffect(() => {
        // playRef.current.children[0].children[0].play() 
        // playRef.current.load()
    }
    );

    return (
        <div ref={playRef} class="audio-player">
            <AudioPlayer src={props.song} autoPlayAfterSrcChange="true" />

        </div>
    )
};

export default Player;
