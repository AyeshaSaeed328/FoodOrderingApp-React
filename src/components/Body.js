import RestCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRes, setlistOfRes] = useState([])
    const [filteredlistOfRes, setfilteredlistOfRes] = useState([])
    const [searchText, setsearchText] = useState("")


    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async function () {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setlistOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredlistOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)



    }
    if (listOfRes.length === 0) {
        return (

            <Shimmer />

        )
    }


    return (
        <div className="body">
            <div className="space"></div>
            <div className="filter-search">
                <input type="text" className="search-bar" placeholder="Search" value={searchText} onChange={(e) => {
                    // setsearchText(e.target.value)
                    // const filtered = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    // setfilteredlistOfRes(filtered)

                    const newSearchText = e.target.value;
                    setsearchText(newSearchText);
                    // Filter the list immediately after updating searchText
                    const filtered = listOfRes.filter((res) => 
                    res.info.name.toLowerCase().includes(newSearchText.toLowerCase())
                    );
                    setfilteredlistOfRes(filtered);
                    
                }} />
                <button id="search-btn" className="btn" onClick={() => {
                    const filtered = listOfRes.filter((res) => (res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    setfilteredlistOfRes(filtered)
                    }}>Search</button>
                <button className="btn" onClick={() => {
                    const filteredRes = listOfRes.filter((res) => res.info.avgRating > 4);
                    setfilteredlistOfRes(filteredRes)
                }}>Top Rated Restaurant</button>

            </div>
            <div className="rest-container">
                {filteredlistOfRes.map((restaurant) =>
                    <RestCard key={restaurant.info.id} resData={restaurant} />
                )}


            </div>
        </div>
    )
}

export default Body;