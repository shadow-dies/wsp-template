import React from "react";
import { Data } from "../../Data/data"
import './index.css';

const Topbannner : React.FC = () => {
    const topbannner = Data.topBanners[0];
    return (<>
        <div className="topbanner">
            <a href = {topbannner.content} className = "banner-img" >
                <img src = 'https://newdocer.cache.wpscdn.com/png/20230113/c902fc91bbda49e7b9d8a4fb80462f19.png'
                     className = "banner-img"></img>
            </a>
        </div>
    </>)
}

export default Topbannner;