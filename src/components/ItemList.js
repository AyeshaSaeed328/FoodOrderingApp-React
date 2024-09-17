import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
    return (
        <div>

            {items.map((item) => <div className="p-2 m-2 font-normal text-left flex justify-between  border-gray-300 border-b-2"
                key={item?.card?.info?.id} >
                <div>
                    <div className="font-semibold py-2 my-2">
                        {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                    </div>

                    <div>
                        {item?.card?.info?.description}
                    </div>
                </div>
                {item?.card?.info?.imageId && (
                    <img
                        src={`${CDN_URL}${item?.card?.info?.imageId}`}
                        alt={item?.card?.info?.name}
                        className="w-32 h-32 m-4"
                    />
                )}
                {/* <img src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} className="w-32 h-32 m-4"></img> */}
            </div>)}


        </div>
    )
}

export default ItemList;