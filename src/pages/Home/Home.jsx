import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import hero_img from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import button1 from "../../assets/play_icon.png";
import button2 from "../../assets/info_icon.png";
import Titlecards from "../../Components/TitleCards/Titlecards.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_img} className="banner-img" alt="#Home"  />
        <div className="hero-caption">
          <img src={hero_title} alt="hero-title" className="caption-img" />
          <p>
            Discovring his ties to a secret ancient order, a young man living in
            modren Istanbul embarks on a quest to save the city form an immortal
            enemy
          </p>
          <div className="hero-btns">
            <button className="btn"><img src={button1} alt="" />Play</button>
            <button className="btn dark-btn"><img src={button2} alt="info-button"/> More Info</button>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more-cards">
      <Titlecards title={"Blockbuster Movies"} category={"popular"} />
      <Titlecards title={"Only on Netflix"} category={'top_rated'}/>
      <Titlecards title={"Upcoming Movies"} category={'upcoming'} />
      <Titlecards title={"My List"} category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
