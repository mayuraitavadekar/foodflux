import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../../utils/constants";
import ImageNotAvailable from "../../assets/images/img-not-available.jpg";

const RestaurantMenu = (props) => {
  const { id } = useParams();

  const [restaurantData, setRestaurantData] = useState(null); // set recommended menu

  const fetchRestaurantMenu = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        id
    );
    let jsonData = await data.json();
    setRestaurantData(jsonData.data);
    //   jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //     .itemCards
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  console.log(restaurantData);

  return (
    <>
      <div className="restaurant-menu-container">
        <div className="restaurant-header">
          <div className="restaurant-image-container">
            <img
              src={
                restaurantData?.cards[0]?.card?.card?.info
                  ?.cloudinaryImageId !== ""
                  ? CDN_URL +
                    restaurantData?.cards[0]?.card?.card?.info
                      ?.cloudinaryImageId
                  : DEFAULT_IMAGE_URL
              }
              className="restaurant-img"
            />
            <h1 className="restaurant-name">
              {restaurantData?.cards[0]?.card?.card?.info?.name}
            </h1>
            <h3 className="restaurant-cuisines">
              {restaurantData?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
            </h3>
            <div className="additional-details-div">
              <div className="cost-for-two-div">
                <div className="cost-for-two-subdiv">
                  {
                    restaurantData?.cards[0]?.card?.card?.info
                      ?.costForTwoMessage
                  }
                </div>
              </div>
              <div className="avg-rating-div">
                <div className="rating-div">
                  {restaurantData?.cards[0]?.card?.card?.info?.avgRating}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="restaurant-menu">
          <div className="restaurant-menu-header-div">
            <h2 className="restaurant-menu-header">Menu Card</h2>
          </div>

          {restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.slice(1, 5)
            .map((menuCategory, index) => {
              if (menuCategory?.card?.card?.itemCards) {
                return (
                  <div className="menu-card-item-div" key={index}>
                    <div className="menu-item-details-div">
                      <div>
                        <h3>
                          {
                            menuCategory?.card?.card?.itemCards[0]?.card?.info
                              ?.name
                          }
                        </h3>
                        <p>
                          ₹{" "}
                          {menuCategory?.card?.card?.itemCards[0]?.card?.info
                            ?.price / 100}
                        </p>
                      </div>
                    </div>
                    <div className="menu-item-image-div">
                      <div className="img-container">
                        {menuCategory?.card?.card?.itemCards[0]?.card?.info
                          ?.imageId !== undefined ? (
                          <img
                            src={
                              CDN_URL +
                              menuCategory?.card?.card?.itemCards[0]?.card?.info
                                ?.imageId
                            }
                            className="menu-item-img"
                          />
                        ) : (
                          <img
                            src={ImageNotAvailable}
                            className="menu-item-img"
                          />
                        )}
                        {/* <img
                          src={
                            CDN_URL +
                            menuCategory?.card?.card?.itemCards[0]?.card?.info
                              ?.imageId
                          }
                          className="menu-item-img"
                        /> */}
                      </div>
                    </div>
                    <div className="menu-item-add-btn-div">
                      <button className="menu-item-add-btn">Add</button>
                    </div>
                  </div>
                );
              } else return null;
            })}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
