
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";

const ResInfo = () => {
    const { resId } = useParams();
    const [info, menu] = useResInfo(resId);
    

    if (info === null) return <Shimmer />

    return (
        <div>
            <div className="space"></div>
            <h1>{info.name}</h1>
            <p>{info.avgRating}</p>
            <div>
                {menu.map((item) =>
                    <li key={item?.card?.info?.id} >{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
                    
                )}


            </div>
        </div>
    )
}
export default ResInfo;