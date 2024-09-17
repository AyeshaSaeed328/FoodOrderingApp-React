import RestCard, {RestCardwithPromoted} from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurantsList"; 

const Body = () => {
    const { listOfRes, filteredListOfRes, setFilteredListOfRes } = useRestaurants(); 
    const [searchText, setSearchText] = useState("");

    console.log(listOfRes);
    const RestCardPromoted = RestCardwithPromoted(RestCard)

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <div>
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
        <div className="body dark:bg-gray-800 dark:text-white">
            <div className="space"></div>
            <div className="filter-search">
                <input type="text" className="w-full py-2 px-4 pl-10 border text-gray-900 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                 placeholder="Search" value={searchText} onChange={handleSearchChange}/>
                
                <button id="filter-btn"  className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-[1180px] mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                onClick={handleTopRatedClick}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="rest-container flex flex-wrap m-5 p-4">
                {filteredListOfRes.map((restaurant, index) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {index < 5 ? <RestCardPromoted resData={restaurant} /> : <RestCard resData={restaurant} />}

                        
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;