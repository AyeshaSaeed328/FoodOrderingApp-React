import RestCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurantsList"; 

const Body = () => {
    const { listOfRes, filteredListOfRes, setFilteredListOfRes } = useRestaurants(); 
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <div>
                <div className="space"></div>
                <h1>Looks like you are offline</h1>
            </div>
        );
    }

    if (listOfRes.length === 0) {
        return <Shimmer />;
    }

    const handleSearchChange = (e) => {
        const newSearchText = e.target.value;
        setSearchText(newSearchText);
        const filtered = listOfRes.filter((res) =>
            res.info.name.toLowerCase().includes(newSearchText.toLowerCase())
        );
        setFilteredListOfRes(filtered);
    };

    const handleTopRatedClick = () => {
        const filteredRes = filteredListOfRes.filter((res) => res.info.avgRating > 4);
        setFilteredListOfRes(filteredRes);
    };

    return (
        <div className="body">
            <div className="space"></div>
            <div className="filter-search">
                <input type="text" className="search-bar" placeholder="Search" value={searchText} onChange={handleSearchChange}/>
                
                <button id="filter-btn" className="btn" onClick={handleTopRatedClick}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="rest-container">
                {filteredListOfRes.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        <RestCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;