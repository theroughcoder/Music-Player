
import Carousel from "../../component/carousel";
import Song from "../../component/song";
import SongList from "../../component/songList";
import { data } from "../../data";

import "./style.css"

// Example usage
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs as needed
];

const Home = (props) => {


  return (
    <div className="home">
      Home
      <div style={{ marginTop: "100px" }}>
        <Carousel images={images} />
      </div>

      <h1 >Latest Hindi Songs</h1>
     <SongList data={data} category="Hindi" />

      <h1 >Latest English Songs</h1>
     <SongList data={data} category="English"/>

      <h1 >Latest Punjabi Songs</h1>
     <SongList data={data} category="Punjabi"/>


    </div>
  )
};

export default Home;


