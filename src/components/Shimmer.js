const Shimmer = () => {
    return (

        <div>
            <div className="space"></div>
            <div className="filter-search">
            <input type="text" className="search-bar" placeholder="Search" />
            <button id="search-btn" className="btn">Search</button>
                <button className="btn" >Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="rest-card" key={index}>
                        <div className="res-img-shimmer"></div>
                        <div className="text-shimmer"></div>
                        <div className="text-shimmer"></div>
                    </div>))}


            </div>
        </div>
    )
}
export default Shimmer;