import { useNavigate } from "react-router-dom";
// import { cardImage } from "../../assets/images";
////styles
import "./styles.scss";
const SliderCard2 = ({ image ,name,description,price}) => {
  const nav = useNavigate()
  const navHandler = (url)=>{
    nav("/tour-detail/"+url)
  }
  return (
    <a href="#">

    <div className="slider-card2" >
      <div className="top-col" style={{ backgroundImage: `url(${image})` }}>
        {/* <img src={cardImage}/> */}
        {/* <img src={data?.image}/> */}
      </div>
      <div className="bottom-col">
        <h4 className="card-heading">{name}</h4>
        <p>{description}</p>
<<<<<<< HEAD
        <span>{price}</span>
=======
        <span> {price}</span>
>>>>>>> 767923e (remove extra aed)
      </div>
    </div>
    </a>
  );
};

export default SliderCard2;
