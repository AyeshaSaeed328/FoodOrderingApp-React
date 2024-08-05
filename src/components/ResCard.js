import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, resDesc, avgRating } = resData?.info;

    return (
        <div className="rest-card">
            <img className="rest-img" src={CDN_URL + cloudinaryImageId} />
            <h3 className="rest-name">{name}</h3>
            {cuisines.length > 5 ? <p className="rest-desc">{cuisines.slice(0,5).join(', ')+"..."}</p> : <p className="rest-desc">{cuisines.join(', ')}</p> }
            

            <p className="rating">{avgRating}</p>

        </div>)
}
export default RestCard;