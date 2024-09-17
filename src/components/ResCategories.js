import { useState } from "react";
import ItemList from "./ItemList";

const ResCategories = ({ data }) => {

    const [showItems, setShowItems] = useState(false)

    const clickHandler = () => {
        setShowItems(!showItems)
        console.log(showItems)
    }   

    return (
        <div className="w-6/12 bg-slate-700 p-4 mx-auto my-4 shadow-lg font-bold">

            <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
                <span>{data?.card?.card?.title + " (" + data?.card?.card?.itemCards.length + ")"}</span>
                <span>⌄</span>
            </div>

            {showItems && <ItemList items={data?.card?.card.itemCards} />}

        </div>

        
    )
}
export default ResCategories;