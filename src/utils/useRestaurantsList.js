import { useState, useEffect } from "react";
import { resList_URL } from "../utils/constants";

const useRestaurants = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(resList_URL);
            const json = await data.json();

            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRes(restaurants);
            setFilteredListOfRes(restaurants);
        };

        fetchData();
    }, []);

    return { listOfRes, filteredListOfRes, setFilteredListOfRes };
};

export default useRestaurants;
