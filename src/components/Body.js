import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantComponents/RestaurantCard";
import { useEffect, useState } from "react";
import RestaurantListShimmerCard from "./RestaurantComponents/RestaurantListShimmerCard";
import SearchedRestaurantNotAvailable from "./SearchedRestaurantNotAvailable";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const onClickSearchButton = (e) => {
    // filter listOfRestaurants based on word
    // in search box
    setFilteredRestaurant(
      allRestaurants.filter((restaurant) =>
        restaurant?.data?.name
          ?.toLowerCase()
          ?.includes(searchText.toLocaleLowerCase())
      )
    );
  };

  const onClickFilterButton = (e) => {
    setFilteredRestaurant(
      allRestaurants.filter((res) => res.data.avgRating > 4)
    );
  };

  const getListOfRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    // set state of all restaurant
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);

    // set state of filtered restaurant
    setFilteredRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    getListOfRestaurants();
  }, []);

  return (
    <div className="body">
      <div className="top-body-container">
        <div className="empty-space"></div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search restaurant"
            value={searchText}
            onChange={(e) => onChangeSearchText(e)}
          ></input>
          <button
            className="search-btn"
            onClick={(e) => onClickSearchButton(e)}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={(e) => onClickFilterButton(e)}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {allRestaurants?.length === 0 ? (
        <div className="sh-res-container">
          {[...Array(10)].map((item, index) => (
            <RestaurantListShimmerCard key={index} />
          ))}
        </div>
      ) : (
        <>
          {filteredRestaurant.length == 0 ? (
            <div className="res-not-found-container">
              <SearchedRestaurantNotAvailable />
            </div>
          ) : (
            <div className="res-container">
              {filteredRestaurant.map((resCard) => (
                <Link
                  to={"/restaurant/" + resCard.data.id}
                  key={resCard.data.id}
                  style={{ textDecoration: "none" }}
                >
                  <RestaurantCard key={resCard.data.id} resData={resCard} />
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Body;
