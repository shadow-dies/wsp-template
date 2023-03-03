/* eslint-disable react/jsx-pascal-case */
import { Data } from "../../Data/data"
import Card_item from "../Card-item";
import './index.css';

const Card : React.FC = () => {
    const cards = Data.cards;
    
    return (
    <>
        <main className="main">
            {
                cards.map((card) => {
                    return(
                    <>
                        <div className="head">
                            <h2 className="title">{card.name}</h2>
                            <ul className="categories">
                            {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                card.categories.map((categorie) => {
                                    return(
                                    <>
                                        <li className="category-item">
                                            {categorie.name}
                                        </li>
                                    </>)
                                })
                            }
                            </ul>
                        </div>
                        <ul className="templates">
                        {
                            card.templates.map((template) => {
                                
                                return(
                                <>
                                    <Card_item id={template.id} 
                                               coverImage = {template.coverImage}
                                               name = {template.name}
                                               view_count = {template.view_count}
                                               pay_type = {template.pay_type}
                                               format = {template.format}
                                               jpgSmallImage = {template.jpgSmallImage}
                                    ></Card_item>
                                </>)
                            })
                        }
                        </ul>
                        <a className="show-all">Show All {'>'}</a>
                    </>)
                })
            }
        </main>
    </>)
}

export default Card;