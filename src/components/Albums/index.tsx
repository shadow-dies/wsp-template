import { Data } from "../../Data/data"
import './index.css';

const Albums: React.FC = () => {
    const albems = Data.topSpecials;
    return (
    <>
        <div className="albums">
            <h2 className="album-title">Template Albums</h2>
            <ul className="album-list">
                {
                    albems.map( (albem) => {
                        return(
                        <>
                            <li className="special-list-item">
                                <img src={albem.thumbnail} className = " albem-img" />
                            </li>
                        </>)
                    })
                }
            </ul>
        </div>
    </>)
}

export default Albums;