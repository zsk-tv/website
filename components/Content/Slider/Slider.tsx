import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Styles from "./Slider.module.scss";

const props = {
  prevArrow: (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  
  nextArrow: (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};

function Slider() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <div className={Styles.slider}>
      <Slide easing="ease" {...props}>
        <div className={Styles.slide}>
          <div style={{ backgroundImage: `url(${images[0]})` }}>
          </div>
        </div>
        <div className={Styles.slide}>
          <div style={{ backgroundImage: `url(${images[1]})` }}>
          </div>
        </div>
        <div className={Styles.slide}>
          <div style={{ backgroundImage: `url(${images[2]})` }}>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Slider;
