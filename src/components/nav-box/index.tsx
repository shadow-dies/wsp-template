import './index.css';
import {url_flower} from "../../Data/data"
const Navbox: React.FC = () => {
    return(
    <>
        <nav className='nav-box'>
            <div className='nav-content'>
                <a href="https://template.wps.com/">
                    <img src="https://ds.cache.wpscdn.com/template-website/img/logo.efb82aa.png"
                         alt='WPS Template - Free Download Writer, Presentation & Spreadsheet Templates'
                         className='logo-img' />
                </a>
                <a href="https://template.wps.com/" className='nav-btn'>
                    <span className='nav-text'>Home</span>
                    
                </a>
                <a href="https://template.wps.com/ppt/" className='nav-btn'>
                    <span className='nav-text'>Presentation</span>
                </a>
                <a href="https://template.wps.com/word/" className='nav-btn'>
                    <span className='nav-text'>Writer</span>
                </a>
                <a href="https://template.wps.com/ppt/" className='nav-btn'>
                    <span className='nav-text'>Spreadsheet</span>
                </a>
                <a href="https://template.wps.com/excel/" className='nav-btn'>
                    <span className='nav-text'>Premium</span>
                </a>
                <a href="https://template.wps.com/channels/" className='nav-btn'>
                    <span className='nav-text'>Resume Master</span>
                    <img src="https://ds.cache.wpscdn.com/template-website/img/corner-mark.ebf8837.png" alt="cornermark" className="cornermark" ></img>
                </a>
                <div  className='flex-auto'></div>
                <div className='search-box'>
                    <i className="search-icon"></i>
                    <input className='search-input'></input>

                </div>
                <div className='download-wps'>
                    <button className='download-btn'>Free Download WPS</button>
                    <div className='popover '>
                        <div className='content-box'>
                            <h4 className='downloadtitle'>
                                <img src= {url_flower}
                                     className='icon-flower' />
                                Download desktop app
                            </h4>
                            <p className="desc">More powerful useful features and high-quality templates in WPS Office desktop.</p> 
                            <p  className="btn-box">
                                <button className='btn-try'>Try Now !</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='prenium-logo'>
                    <img src="https://ds.cache.wpscdn.com/template-website/img/premium-no-bg.9920469.svg" 
                         alt="premium-no-bg.svg"
                         className="grade-logo" />
                    

                    <div className="premium-interests" >
                        <div className="premium-interests-box cursor-default" >
                            <a href="/premium" className="to-interests-btn" >Upgrade to premium</a> 
                            <p className="sign-in-wrapper" >
                                Already premium?
                                <span className="sign-in" >Sign in</span> 
                                Here
                            </p> 
                            <p className="feature" >
                                <span className="line" ></span> 
                                <span className="feature-text" >Feature</span> 
                                <span className="line" ></span>
                            </p> 
                            <ul className="interests-list">
                                <li className="interests-item">
                                    <img src="https://ds.cache.wpscdn.com/template-website/img/upgrade-tick.4d175e6.svg" alt="icon" className="interests-icon"/> 
                                    <span className="interests-info">Full access to WPS Resume</span>
                                </li>
                                <li className="interests-item">
                                    <img src="https://ds.cache.wpscdn.com/template-website/img/upgrade-tick.4d175e6.svg" alt="icon" className="interests-icon"/> 
                                    <span className="interests-info"  >Unlimted downloads of Library</span>
                                </li>
                                <li className="interests-item">
                                    <img src="https://ds.cache.wpscdn.com/template-website/img/upgrade-tick.4d175e6.svg" alt="icon" className="interests-icon"/> 
                                    <span className="interests-info" >Ad-Free and Cross-Platform</span>
                                </li>
                                <li className="interests-item">
                                    <img src="https://ds.cache.wpscdn.com/template-website/img/upgrade-tick.4d175e6.svg" alt="icon" className="interests-icon"/> 
                                    <span className="interests-info"  >1 GB WPS Cloud Storage</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
                
                <div className='signin nav-text nav-btn'>
                    <span className='nav-text'>Sign in</span>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbox;