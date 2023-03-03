import './index.css';
const footer_list = [
    {
        name: "Products",
        list: [
            "WPS Office Free",
            "WPS Office Premium",
            "WPS Office Business",
            "WPS PDF to Word",
            "WPS Data Recovery Master",
            "WPS Office for Android",
            "WPS Office for iOS",
            "WPS Office for Linux",
        ]
    },
    {
        name: "Company",
        list: [
            "About Us",
            "Press Center",
            "Contact Us",
            "License Agreement",
            "Privacy Policy",
            "Cookie Declaration",
        ]
    },

    {
        name:"Support",
        list: [
            "Privacy Policy",
            "Terms and Conditions",
        ]
    },
]

const Footer: React.FC = () => {
    return(
    <>
    <div className="footer">
        <div className="footer-list">
            <div className="footer-item">
                <div className="wps-logo"></div>
            </div>
            {
                footer_list.map((item) => {
                    const classname = "footer-item" + " " + item.name;
                    return(
                    <>
                    <div className = {classname}>
                        <h3 className="footer-title">{item.name}</h3>
                        <ul className="footer-list-items">
                        {
                            item.list.map((listitem) => {
                                return(<>
                                    <li className="footer-list-item" > { listitem } </li>
                                </>)
                            })
                        }
                        </ul>
                    </div>
                    </>
                    )
                })
            }
            <div className="footer-follow-us footer-item">
                <h3 className="footer-title">Follow us</h3>
                <div className="footer-follow-us-content">
                    <a href="https://www.facebook.com/WPSTemplates/"  className="footer-follow-us-item facebook"></a>
                    <a href="https://www.youtube.com/channel/UCoUYkHC7q-c93h4BRM_VWyA" className="footer-follow-us-item youtube"></a>
                    <a href="https://twitter.com/Palette59442871"  className="footer-follow-us-item twitter"></a>
                    <a href="https://www.instagram.com/wpstemplate/" className="footer-follow-us-item instagram"></a>
                </div>
            </div>
        </div>
        <div className="footer-copyright">Copyright © Kingsoft Office Software, All Rights Reserved.</div>
    </div>
    
    </>)
}

export default Footer;