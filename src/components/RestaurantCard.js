import { Link } from "react-router-dom";
import { CDN_URL, DEFAULT_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="restaurant-card">
      <img
        src={
          cloudinaryImageId !== ""
            ? CDN_URL + cloudinaryImageId
            : DEFAULT_IMAGE_URL
        }
        className="res-card-img"
      />
      <div className="p-32">
        <h3 className="resName">{name}</h3>
        <h4 className="cousines">{cuisines.join(", ")}</h4>
        <h4 className="avg-rating">{avgRating}</h4>
        <h4 className="cost-for-two">₹ {costForTwo / 100} FOR TWO</h4>
        <h4 className="delivery-time">{deliveryTime} Minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
