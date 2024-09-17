import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

    return (
        <div className="p-2 m-2 bg-slate-700 w-[250px] h-[425px] hover:shadow-2xl hover:cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out">
            <img className=" w-full h-[200px] " src={CDN_URL + cloudinaryImageId} />
            <h3 className="p-2 m-2  font-bold">{name}</h3>
            {cuisines.length > 5 ? <p className="rest-desc px-2 mx-2">{cuisines.slice(0,5).join(', ')+"..."}</p> : <p className="rest-desc px-2 mx-2">{cuisines.join(', ')}</p> }
            

            <p className="px-2 mx-2">{avgRating}</p>

        </div>)
}

export const RestCardwithPromoted = (RestCard) =>{
    return (props) =>{
        return (
            <div>
                <label className="p-2 m-2 bg-slate-700 text-white absolute">Promoted</label>
                <RestCard {...props}/>
                
            </div>
        )
    }
}
export default RestCard;