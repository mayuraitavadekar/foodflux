

const RestaurantListShimmer = () => {
    return (
        <div className="sh-restaurant-card">
            <img className="sh-background sh-res-card-img" />
            <div className="p-32">
                <h3 className="sh-background sh-resName"></h3>
                <h4 className="sh-background sh-cousines"></h4>
                <h4 className="sh-background sh-avg-rating"></h4>
                <h4 className="sh-background sh-cost-for-two"></h4>
                <h4 className="sh-background sh-delivery-time"></h4>
            </div>
            
        </div>
    );
};

export default RestaurantListShimmer;