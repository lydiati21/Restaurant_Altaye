import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import "./Laurels.css";

const Awardcard = ({ award: { imgUrl, title, subtitle, URL } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" className="app__laurels_img" />
    <div className="app__laurels_awards-card_content">
       <a className="title" href={URL} target="_blank" rel="noopener noreferrer">
      <p className="p__cormorant" style={{ color: "#DCCA87" } }>
        {title}
      </p>
      </a>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);
const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Explore Our Reviews" />
      <h1 className="headtext__cormorant">Our Reviews On</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <Awardcard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.customers} alt="laurels" />
    </div>
  </div>
);


export default Laurels;


// new

// import { SubHeading } from "../../components";
// import { images, data } from "../../constants";

// import "./Laurels.css";

// const Awardcard = ({ award: { imgUrl, title, subtitle, URL } }) => (
//   <div className="app__laurels_awards-card">
//     <img src={imgUrl} alt="award" className="app__laurels_img" />
//     <div className="app__laurels_awards-card_content">
//       <a href={URL} target="_blank" rel="noopener noreferrer">
//         <p className="p__cormorant" style={{ color: "#DCCA87" }}>
//           {title}
//         </p>
//       </a>
//       <p className="p__cormorant">{subtitle}</p>
//     </div>
//   </div>
// );

// const Laurels = () => (
//   <div className="app_bg appwrapper section_padding" id="awards">
//     <div className="app__wrapper_info">
//       <SubHeading title="Awards & recognition" />
//       <h1 className="headtext__cormorant">Our Reviews On</h1>

//       <div className="app__laurels_awards">
//         {data.awards.map((award) => (
//           <Awardcard award={award} key={award.title} />
//         ))}
//       </div>
//     </div>
//     <div className="app__wrapper_img">
//       <img src={images.customers} alt="laurels" />
//     </div>
//   </div>
// );

// export default Laurels;