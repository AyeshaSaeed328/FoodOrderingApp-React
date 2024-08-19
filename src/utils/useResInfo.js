import { useState, useEffect } from "react"
import { resInfo_URL } from "./constants"


const useResInfo = (resId) => {


    const [info, setInfo] = useState(null)
    const [menu, setMenu] = useState(null)

    const fetchResInfo = async function () {
        const data = await fetch(resInfo_URL + resId)
        const json = await data.json();
        setInfo(json?.data?.cards[2]?.card?.card?.info)
        const menuPath1 = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        const menuPath2 = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

        setMenu(menuPath2 || menuPath1);



    }

    useEffect(() => { fetchResInfo() }, [])

    return [info, menu];



}

export default useResInfo;