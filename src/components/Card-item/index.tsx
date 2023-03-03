/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Data } from "../../Data/data"
import './index.css';

interface templates {
    id: string;
    coverImage: string;
    name: string;
    format: string;
    pay_type: number;
    view_count: number;
    jpgSmallImage: string;
}

interface info_type {
    flag: boolean;
    name:string;
}

interface isdownload {
    flag: number;
}

const Info_text: React.FC<info_type> = ({flag, name}) => {
    if(!!!flag) {
        return(
        <>
            <p className="premium-title">{name}</p>
            <div className="premium"></div>
        </>)
    }
    else {
        return(
        <>
            <p className="premium-title">{name}</p>
        </>)
    }
    
}

const T_btn: React.FC<isdownload> = ({flag}) => {
    if(flag === 2) {
        return(
        <>
            <div className="t-icon">
                <button className="t_download-btn">
                    <span className="download-txt">Download</span>
                </button>
                <button className="favor-btn">
                    <i className="icon-favor"></i>
                </button>
            </div>
        </>
        )
    }

    else {
        return(
        <>
            <div className="t-icon">
                <button className="favor-btn">
                    <i className="icon-favor"></i>
                </button>
            </div>
        </>
        )
    }
    
}

const Card_item : React.FC<templates> = ({id,coverImage,name,view_count,pay_type,format,jpgSmallImage}) => {
    let logo_class = "t-logo";
    if(format === "PPT") {
        logo_class = "t-logo logo-p";
    }
    else if(format === "WORD") {
        logo_class = "t-logo logo-w";
    }
    else if (format === "EXCEL")
    {
        logo_class = "t-logo logo-e";
    }

    const num = view_count > 1000000 ? view_count/1000000 : view_count/1000;
    

    return(
        <>
        <li className="template-item">
            <div className="t-container">
                <a className="t-child">
                    <div className="img-container">
                        <img className="coverimg" src = {coverImage} ></img>
                        <T_btn flag={pay_type}></T_btn>
                    </div>
                    <div className="t-info">
                        <div className="info-text">
                            <Info_text flag = {true} name = {name.slice(0,name.indexOf('.'))}></Info_text>
                        </div>
                        <div className="sub-info">
                            <span className={logo_class}></span>
                            <span className="view-icon"></span>
                            <span className="view-num">{num.toFixed(1)}{view_count > 1000000 ? "M" : "K"}</span>
                        </div>
                    </div>
                </a>
            </div>
        </li>
        </>
    )
}
export default Card_item;