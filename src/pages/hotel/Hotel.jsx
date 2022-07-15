import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const photos = [
    {
      src: "http://images6.fanpop.com/image/photos/38800000/Travel-tour-Taiwan-landscape-random-38823706-1280-800.jpg",
    },
    {
      src: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/04/DSC06227-1.jpg",
    },
    {
      src: "https://www.apogeephoto.com/wp-content/uploads/2016/09/travel-photographer.jpg",
    },
    {
      src: "https://s20426.pcdn.co/wp-content/uploads/2018/11/iStock-870378096-e1544710804582-1600x800.jpg",
    },
    {
      src: "https://www.apogeephoto.com/wp-content/uploads/2016/09/travel-photographer.jpg",
    },
    {
      src: "https://s20426.pcdn.co/wp-content/uploads/2018/11/iStock-870378096-e1544710804582-1600x800.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={()=>setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt="slided"
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow"> Reserve or Book Now!</button>
          <h1 className="hotelTitle">GrandHotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="">Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Duis mauris elit, pellentesque et elit at, egestas congue nibh.
                Fusce facilisis tincidunt arcu. Sed eu urna metus. Curabitur
                vitae hendrerit dolor. Duis lobortis laoreet turpis, id suscipit
                augue blandit ut. Nunc eu suscipit lectus, vel interdum augue.
                Etiam ut ex purus. Curabitur ultrices hendrerit libero, vitae
                porttitor leo condimentum et. Morbi egestas erat magna, a
                dapibus leo congue eu. Donec eu pretium leo, at sodales arcu.
                Morbi eget urna eu ipsum imperdiet fermentum a vitae tellus.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
