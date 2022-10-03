import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Styles from "./Slider.module.scss";

const props = {
  prevArrow: <button className={Styles.button} />,

  nextArrow: <button className={Styles.button} />,
};

function Slider() {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  return (
    <div className={Styles.slider}>
      <Slide easing="ease" {...props}>
        <div className={Styles.slide}>
          <div style={{ backgroundImage: `url(${images[0]})` }}></div>
        </div>
        <div className={Styles.slide}>
          <div style={{ backgroundImage: `url(${images[1]})` }}></div>
        </div>
        <div className={Styles.slide}>
          <div style={{ backgroundImage: `url(${images[2]})` }}></div>
        </div>
      </Slide>
    </div>
  );
}

export default Slider;
