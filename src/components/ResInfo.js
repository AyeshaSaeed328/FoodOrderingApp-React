
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";
import ResCategories from "./ResCategories";

const ResInfo = () => {
    const { resId } = useParams();
    const [info, categories] = useResInfo(resId);
    

    if (info === null) return <Shimmer />

    return (
        
        <div className="min-h-screen text-center dark:bg-gray-800 dark:text-white">
            <h1 className="m-2 p-2 text-3xl font-bold">{info.name}</h1>
            {/* <p>{info.avgRating}</p> */}
            <div>
                
                {categories.map((category) =>( <ResCategories key={category?.card.card.title} data= {category}/>))}


            </div>
        </div>
    )
}
export default ResInfo;