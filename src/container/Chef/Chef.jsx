import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.altayeinterior} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe</h1>

      <div className="app__chef-content">
        {/* <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div> */}
        <p className="p__opensans">
          {" "}
          We believe that great food should be accompanied by great service. Our
          team is here to ensure that your dining experience is flawless, from
          the moment you walk in to the moment you leave. Your satisfaction is
          our top priority.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Tizata Zeleke</p>
        <p className="p__opensans">Chef & Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
