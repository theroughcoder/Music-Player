import Song from "../song";
import "./style.css";
import React from "react";

const SongList = (props) => {
  return (
   
    <div className="hindi-songs-container">
    <div className="hindi-songs">
      {
        props.data.filter((e) => e.category == props.category).map((e) => {
          return <Song thumbnail={e.thumbnail} song={e.song}/>
        })
      }
    </div>
  </div> 
  )
};

export default SongList;
