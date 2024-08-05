import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ResInfo = () =>{
    const [info, setInfo] = useState(null)
    const [menu, setMenu] = useState(null)
    const {resId} = useParams();

    

    

    
    
    const fetchResInfo = async function(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER") 
        const json = await data.json();
        console.log(json);
        setInfo(json?.data?.cards[2]?.card?.card?.info)
        console.log(info)
        setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        console.log(menu)


    }
    useEffect(()=>{fetchResInfo()},[])
    if (info=== null) return <Shimmer />
    

    return(
        <div>
            <div className="space"></div>
            <h1>{info.name}</h1>
            <p>{info.avgRating}</p>
            <div>
                {menu.map((item) =>
                    <li key={item.card.info.id} >{item.card.info.name}</li>
                )}


            </div>
        </div>
    )
}
export default ResInfo;